
window.App = window.App || {}

class App {
    constructor(){
        this.state = {
            counter: 0
        }
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    setState = (newState) => {
        Object.assign(this.state, newState)
        console.log(this.state)
        this.render()
    }

    render(){
        window.App.increase = this.increase

        const newEl = document.createElement('div')
        const animalEl = new Animal(
            'cat', 
            'https://images.unsplash.com/photo-1564000689425-2f3898b441ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80'
            )
        newEl.innerHTML = `
            <div>Hello World</div>
            <div>${this.state.counter}</div>
            <button id="increase" onClick="window.App.increase()">Increase</button>
            ${animalEl.render()}
            `
        return newEl
    }
}

class Animal {
    constructor(name, img){
        this.props = {
            name: name,
            img: img
        }
    }

    render(){
        const { name, img } = this.props
        return `
            <div>${name}</div>
            <img src="${img}" />
        `
    }
}

const app = new App()
document.getElementById('root').appendChild(app.render())
