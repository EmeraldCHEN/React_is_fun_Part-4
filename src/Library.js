import React from 'react'
import { PropTypes } from 'prop-types';

// Modularize code

import { NotHiring } from './NotHiring';
import { Hiring } from './Hiring';

import { Book } from './Book';
    

// const Library = ({books}) => {

//****************   Refactor the code, update the Library component to be an ES6 class insead of a function component                               ******************************************************** */

class Library extends React.Component{

    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author":"Chet Whitley","pages":1000}
        ]
    }
    // constructor(props){
    //     super(props)
    //         this.state = {
    //             open: true
    //         } 
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this);       
    // }
    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false

    };
    // Use the component lifecycle to fetch some remote data from the API and display it
    componentDidMount(){
       // console.log("The component is now mounted!"); // We'll see the message as soon as I open the console
        this.setState({
            loading: true
        })
        fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/2")
            .then(data => data.json())
            .then(data => this.setState({
                data, loading:false
            }))
    
    }

    //*****************  Most common lifecycle methods  to cover most of use cases when dealing with component life cycle      ********************************* */

    // ****** The constructor allows us to initialize state.
    // ****** Render is called every time there is any sort of change
    // ****** ComponentDidMount is going to be called right after our component is added to the dom
    // ****** ComponentDidUpdate, when anything changes
    // ****** ComponentWillUnmount, do do any sort of cleanup. If want to invalidate a timer, or do any cleanup of any nodes

    

    // After I hit Change button , the below message will be shown
    componentDidUpdate(){
        console.log("The component just updated!");
    }

    // toggleOpenClosed(){
    //     this.setState({
    //         open:!this.state.open
    //     })
    // }

    //****************   Using an arrow function which will automatically bind this inside of the context of this function

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){

       // const books = this.props.books; // Otherwiase ERROR: 'books' is not defined
        //  Replace above 'books' with a shorter syntax ES6 destructuring
        const{books} = this.props;
        return(
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading 
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}> {/*  Each child in a list should have a unique "key" prop. */}
                                    <h3>Product of the Week</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100} />
                                    {/* img elements must have an alt prop, either with meaningful text, or an empty string for decorative images jsx-a11y/alt-text */}
                                </div>
                            )
                        })} 
                      </div> // Make the most accessible React apps available
                      //  Web accessibility (also referred to as ally) is the design and creation of websites that can be used by everyone.
                }
                <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                <button onClick={this.toggleOpenClosed} >Change</button>
                {books.map(
                    (book,i) => <Book key={i}
                                      title={book.title}
                                      author={book.author}
                                      pages={book.pages} 
                     
                                      freeBookmark = {this.state.freeBookmark} />
                )}
            </div>
        )
    }
}
// make sure that the right types are provided to all of these components, so that we can find any problems more quickly in the event that they're not.
Library.propTypes = {
    books: PropTypes.array
}

Book.prototype = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library;