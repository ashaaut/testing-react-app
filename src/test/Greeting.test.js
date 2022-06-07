import { render,screen } from '@testing-library/react'
import Greeting from './../components/Greeting'

test('renders hello world as a text',()=>{
    //Arrange
    render(<Greeting/>)
    
    const helloWorldElement=screen.getByText("Hello world")

    //Assert
    expect(helloWorldElement).toBeInTheDocument()


})