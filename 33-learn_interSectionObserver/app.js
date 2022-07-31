const sectionOne = document.querySelectorAll('section')[0]
const sections = document.querySelectorAll('section')

const options = {
  rootMargin: '-150px 0px 0px 0px',
  threshold: 0.5,
}

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    // entry.target.classList.toggle('active-sect')
    if (entry.isIntersecting) {
      console.log(entry.target)
      console.log(entry)
      entry.target.classList.add('active-sect')
      if (entry.target.nextElementSibling)
        entry.target.nextElementSibling.classList.remove('active-sect')
      if (entry.target.previousElementSibling)
        entry.target.previousElementSibling.classList.remove('active-sect')
    }
  })
}, options)

// observer.observe(sectionOne)

sections.forEach(sect => {
  observer.observe(sect)
})
