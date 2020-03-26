from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
import uuid
import boto3
from .models import Finch
from .forms import FeedingForm


# Create your views here.

class FinchCreate(LoginRequiredMixin, CreateView):
    model = Finch
    fields = ['name', 'description', 'age']
    def form_valid(self, form):
    # Assign the logged in user to the cat being created
        form.instance.user = self.request.user
    # Let CreateView's form_valid method do its thing
        return super().form_valid(form)

class FinchUpdate(LoginRequiredMixin, UpdateView):
    model = Finch
    fields = ['description', 'age']

class FinchDelete(LoginRequiredMixin, DeleteView):
    model = Finch
    success_url = '/finches/'

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

@login_required
def finches_index(request):
    finches = Finch.objects.all()
    return render(request, 'finches/index.html', {'finches': finches})

@login_required
def finches_detail(request, finch_id):
    finch = Finch.objects.get(id=finch_id)

    feeding_form = FeedingForm()
    return render(request, 'finches/detail.html', {
    'finch': finch, 'feeding_form': feeding_form
    })

@login_required
def add_feeding(request, finch_id):
    form = FeedingForm(request.POST)
    if form.is_valid():
        new_feeding = form.save(commit=False)
        new_feeding.finch_id = finch_id
        new_feeding.save()
    return redirect('detail', finch_id=finch_id)


def signup(request):
  error_message = ''
  if request.method == 'POST':
    # This is how to create a 'user' form object
    # that includes the data from the browser
    form = UserCreationForm(request.POST)
    if form.is_valid():
      # This will add the user to the database
      user = form.save()
      # This is how we log a user in via code
      login(request, user)
      return redirect('index')
    else:
      error_message = 'Invalid sign up - try again'
  # A bad POST or a GET request, so render signup.html with an empty form
  form = UserCreationForm()
  context = {'form': form, 'error_message': error_message}
  return render(request, 'registration/signup.html', context)