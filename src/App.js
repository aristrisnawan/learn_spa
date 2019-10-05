import React from 'react';
import logo from './logo.svg';
import aris from './aris.jpg';
import line from './line.png';
import ig from './ig1.png';
import gmail from './gmail.png';
import './App.css';
import List from './List';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import styles from './appStyles.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron, Button,Col,Row,Card,CardTitle, CardText} from 'reactstrap';
  


// function Clicker(){
//   function handleClick(e){
//     alert('Berhasil mengkilk')
//     e.preventDefault()
//   }
//   return(
//     <a href="#" onClick={handleClick}>Klik</a>
//   )
// }

// class Toggle extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       toggleStatus: true
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState(state => ({
//       toggleStatus:!state.toggleStatus
//     }))
//   }
//   render(){
//     return (
//       <button onClick={this.handleClick}>
//       {this.state.toggleStatus ? 'ON' : 'OF'}
//       <p>Kondisi sekaranng : {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
//       </button>
//     )
//   }
// }


// class App extends React.Component {
  //membuat form
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     todoItem: '',
  //     item :[]
  //   }
  // }
  
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     item:this.state.item.concat([this.state.todoItem]),
  //     todoItem : ''
  //   })
  // }
  // handleChange = (event) => {
 
  //   this.setState ({
  //   todoItem: event.target.value
  //   })

  // }
  
  //memanggil API

//   constructor(props){
//     super(props)
//     this.state ={
//       ar : [],
//       loading : true
//     }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then (response => response.json())
//     .then (data => this.setState({ar:data, loading:false}))
//   }
//   render(){
//     const{ar,loading}=this.state
//     if (loading){
//       return <p>Loading....</p>
//     }
//   return (
//     <div >
//       {/* <form onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.todoItem} onChange={this.handleChange}></input>
//         <button>Add</button>
//       </form>
//       <List item={this.state.item}/> */}
//       <ul>
//          {
//            ar.map((baru,index) =>
//             <li key={index}>{baru.name}</li>)
//          }
//       </ul>
//     </div>
//   );
//   }
// }
//Untuk SPA
function Home(){
  return (
          <div className={styles.pd}>
              <Jumbotron >
                  <h1 className="display-3">Hello, Guys!</h1>
                  <p className="lead ">Nama Saya <b>Aris</b> Trisnawan, Saya seorang mahasiswa di suatu perguruan tinggi swawata
                  di Bandung. Dahulu saya bercita-cita menjadi seorang pesepakbola profesional tapi sekarang 
                  saya ingin menjadi programer.</p>
                  <p className="lead">
                    <Link to='/About'><Button color="primary">Learn More</Button></Link>
                  </p>
                  
              </Jumbotron>
          </div>
      
  )
}
function About(){
  return (
    <div className={styles.penutup}>
       <Row className={styles.pd}>
          <Col xs="3">
              
                <img src={aris}  className={styles.gambar}/>
             
          </Col>
          <Col xs="6">
            <p className="lead">
                Aris Trisnawan<br/>
                Ciamis,25 Agustus 1998<br/>
                Kp. Pojok Rt/Rw 03/04 Kadungora Garut<br/>
                Mahasiswa<br/>
                Islam<br/>
                aristrisnawan35@gmail.com<br/>
                Laki-laki <br/>
                081221561189<br/>
                Programer
            </p>
          </Col>
        </Row>
    </div>
  )
}
function Contact(){
  return (
    <div className={styles.padi}>
      <Row>
      <Col sm="4">
        <Card body>
          <CardTitle><center><img src={ig} className={styles.ig}></img></center></CardTitle>
          <CardText>Anda bisa kunjungi ig saya @aristrisnawan1998 <br/>
          atau bisa klik tombol di bawah ini
          </CardText>
          <Button>Di sini</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle><center><img src={line} className={styles.line}></img></center></CardTitle>
          <CardText>Anda bisa add akun line di aris.tris <br/>
          atau klik dibawah ini
          </CardText>
          <Button>Di sini</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle><center><img src={gmail} className={styles.gmail}></img></center></CardTitle>
          <CardText>Bisa juga kunjungi gmail @aristrisnawan35 <br/>
          atau klik dibawah ini
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    </div>
  );
}

class App extends React.Component{
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <BrowserRouter>
        <div className='App'>
          <Navbar  light expand="md" className={styles.bg}>
            <NavbarBrand >Welcome</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem >
                <Link to='/' className={styles.nav}>Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/About" className={styles.nav}>About</Link>
                </NavItem>
                <NavItem>
                  <Link  to='/Contact' className={styles.nav}>Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <main>
            <Route path='/' exact component={Home}/>
            <Route path='/About' exact component={About}/>
            <Route path='/Contact' exact component={Contact}/>
          </main>
        </div>
        </BrowserRouter>
      );
    }
}
export default App;
