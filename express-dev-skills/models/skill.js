const skills = [
    {skill: 'Node.js'},
    {skill: 'JavaScript'},
    {skill: 'Python'}
  ];

  module.exports = {
      getAll,
      getOne,
      deleteOne,
      create,
      update
  }

  function deleteOne(id) {
      skills.splice(id, 1)
  }

  function getAll() {
      
      return skills
  }

  function getOne(id) {
      return skills[id]
  }
  
  function create(skill) {
      skills.push(skill)
      console.log(skills)
  }

  function update(id, skill) {
    skills.splice(id, 1, skill)
  }