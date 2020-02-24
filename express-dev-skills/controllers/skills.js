const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    delete: deleteSkill,
    create,
    update,
    edit
}

function update(req, res) {
    Skill.update(req.params.id, req.body)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        idx: req.params.id
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    })
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id),
    res.redirect('/skills')
    console.log(skills)

}

function show(req, res) {
    console.log(req.params, 'req.params')
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

