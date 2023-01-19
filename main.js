const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-06'],
  takePills: ['01-03'],
  study: ['01-02']
}

nlwSetup.setData(data)
nlwSetup.load()