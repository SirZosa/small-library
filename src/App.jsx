import React from 'react'
import './App.css'
import Badge from './components/badge.jsx'
import Banner from './components/banner/index'
import Card from './components/card/index'
import Testimony from './components/testimony/index'
import yo from './assets/yo.jpg'
import Nav from './components/navbar'
import Changer from './components/changer/index'
import Footer from './components/footer'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp} from 'react-icons/ai'

function App() {
  const colors = ['gray','red','yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
  const sizes = ['small', 'medium', 'large', 'XL']
  const shapes = ['square', 'pill']
  const types = ['neutral', 'success', 'warning', 'error']
  const sources = [null, yo]

  const [color, setColor] = React.useState(0)
  const [size, setSize] = React.useState(0)
  const [shape, setShape] = React.useState(0)
  const [type, setType] = React.useState(0)
  const [src, setSrc] = React.useState(0)

  function prev(item, array, setFunction){
    if(item === 0){
      setFunction(array.length -1)
    }
    else{
      setFunction(prev => prev - 1)
    }
  }

  function next(item, array, setFunction){
    if (item < array.length -1){
      setFunction(prev => prev + 1)
    }
    else{
      setFunction(0)
    }
  }

  return(
    <>
      <Nav/>
      <section>
        <h1>Compound Components</h1>
        <p>I learned about compound components and I made this website as an excuse to practice this new topic. Compound components in React are very useful to avoid what is called "prop drilling". Without further explanation, let's start.</p>
      </section>
      <section>
        <h2>Badge</h2>
        <div className='component-showcase'>
          <div className='badge-showcase'>
            <Badge color={colors[color]} size={sizes[size]} shape={shapes[shape]}>Text</Badge>
          </div>
        </div>
        <div className='changers'>
          <Changer>
            <Changer.Previous onClick={() => prev(color, colors, setColor)}/>
            <Changer.Text>{colors[color]}</Changer.Text>
            <Changer.Next onClick={() => next(color, colors, setColor)}/>
          </Changer>

          <Changer>
            <Changer.Previous onClick={() => prev(size, sizes, setSize)}/>
            <Changer.Text>{sizes[size]}</Changer.Text>
            <Changer.Next onClick={() => next(size, sizes, setSize)}/>
          </Changer>

          <Changer>
            <Changer.Previous onClick={() => prev(shape, shapes, setShape)}/>
            <Changer.Text>{shapes[shape]}</Changer.Text>
            <Changer.Next onClick={() => next(shape, shapes, setShape)}/>
          </Changer>
        </div>
        <h3>Syntax</h3>
        <p className='code'><span className='dash'>{`<`}</span><span className='component'>{`Badge`}</span> <span className='input'>color</span>=<span className='value'>"{colors[color]}"</span> <span className='input'>size</span>=<span className='value'>"{sizes[size]}"</span> <span className='input'>shape</span>=<span className='value'>"{shapes[shape]}"</span><span className='dash'>{`>`}</span>Text<span className='dash'>{`</`}</span><span className='component'>{`Badge`}</span><span className='dash'>{`>`}</span></p>
      </section>

      <section>
        <h2>Banner</h2>
        <div className='component-showcase'>
          <div className='banner-showcase'>
            <Banner type={types[type]}>
              <Banner.Topic>{types[type].toUpperCase()}</Banner.Topic>
              <Banner.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Banner.Text>
            </Banner>
          </div>
          <div className='changers'>
          <Changer>
            <Changer.Previous onClick={() => prev(type, types, setType)}/>
            <Changer.Text>{types[type]}</Changer.Text>
            <Changer.Next onClick={() => next(type, types, setType)}/>
          </Changer>
          </div>
        </div>
        <h3>Syntax</h3>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`Banner`}</span> <span className='input'>type</span>=<span className='value'>"{types[type]}"</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Banner.Topic`}</span><span className='dash'>{`>`}</span>{types[type].toLocaleUpperCase()}<span className='dash'>{`</`}</span><span className='component'>{`Banner.Topic`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Banner.Text`}</span><span className='dash'>{`>`}</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<span className='dash'>{`</`}</span><span className='component'>{`Banner.Text`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`Banner`}</span><span className='dash'>{`>`}</span></p>
      </section>

      <section>
        <h2>Card</h2>
        <div className='component-showcase'>
          <div className='card-showcase'>
            <Card>
              <Card.Title>Title</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
            </Card>
          </div>
        </div>
        <h3>Syntax</h3>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`Card`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Card.Title`}</span><span className='dash'>{`>`}</span>{types[type].toLocaleUpperCase()}<span className='dash'>{`</`}</span><span className='component'>{`Card.Title`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Card.Text`}</span><span className='dash'>{`>`}</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<span className='dash'>{`</`}</span><span className='component'>{`Card.Text`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`Card`}</span><span className='dash'>{`>`}</span></p>
      </section>

      <section>
        <h2>Testimony</h2>
        <div className='component-showcase'>
          <div className='testimony-showcase'>
            <Testimony src={sources[src]}>
              <Testimony.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cumque ipsam ducimus? Deleniti, magnam. Maiores aliquam, voluptas non laborum minima voluptatum facilis eos asperiores.</Testimony.Text>
              <Testimony.Name>Omar Sosa</Testimony.Name>
              <Testimony.Organization>Github</Testimony.Organization>
            </Testimony>
          </div>
          <div className='changers'>
          <Changer>
            <Changer.Previous onClick={() => prev(src, sources, setSrc)}/>
            <Changer.Text>{src ? "src" : "null"}</Changer.Text>
            <Changer.Next onClick={() => next(src, sources, setSrc)}/>
          </Changer>
          </div>
        </div>
        <h3>Syntax</h3>
        <p className='code'>
          <span className='dash'>{`<`}</span><span className='component'>{`Testimony`}</span> <span className='input'>source</span>=<span className='value'>"{src ? 'source' : null}"</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Testimony.Text`}</span><span className='dash'>{`>`}</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cumque ipsam ducimus? Deleniti, magnam. Maiores aliquam, voluptas non laborum minima voluptatum facilis eos asperiores.<span className='dash'>{`</`}</span><span className='component'>{`Testimony.Text`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Testimony.Name`}</span><span className='dash'>{`>`}</span>Omar Sosa<span className='dash'>{`</`}</span><span className='component'>{`Testimony.Name`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`<`}</span><span className='component'>{`Testimony.Organization`}</span><span className='dash'>{`>`}</span>Github<br></br><span className='dash'>{`</`}</span><span className='component'>{`Testimony.Organization`}</span><span className='dash'>{`>`}</span><br></br>
          <span className='dash'>{`</`}</span><span className='component'>{`Testimony`}</span><span className='dash'>{`>`}</span></p>
      </section>
      <Footer/>
      </>
      
  )
}

export default App
