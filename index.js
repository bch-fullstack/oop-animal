class Animal {
    constructor(name, img){
        this.name = name
        this.img = img
    }

    appear(){
        return `
            <div>${this.name}</div>
            <img src="${this.img}" />
        `
    }
}

class App {
    constructor(){

    }

    render(){
        const cat = new Animal('cat', 'https://images.unsplash.com/photo-1552933529-e359b2477252?ixlib=rb-1.2.1&w=1000&q=80')
        return `
            <div>Hello World</div>
            ${cat.appear()}
            `
    }
}



const content = new App()
document.getElementById('root').innerHTML = content.render()