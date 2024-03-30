// css 70 - 124

export const calculator = () => {

    const button = document.querySelector('.button')
  const firstInput = document.querySelector('#first-input') as HTMLInputElement
  const secondInput = document.querySelector('#second-input') as HTMLInputElement
  const screen = document.querySelector('.screen')

  function addNumbers(a: number, b: number) {
    screen.innerHTML = (a + b).toString()
  }

  button.addEventListener('click', () => addNumbers(
    parseInt(firstInput.value), parseInt(secondInput.value)))
  return (
    <div className='calculator'>
        <input id='first-input' placeholder='first input' />
        <h1>+</h1>
        <input id='second-input' placeholder='second input' />
        <div className='button'></div>
        <div className='screen'>00.00</div>
      </div>
  )
}
