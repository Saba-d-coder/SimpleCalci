import React from 'react';
import ReactDom from 'react-dom';
import CalciTitle from './calciTitle';
import OutputScreen from './outputScreen';
import Button from './button';
import '../calci.css';   

class Calci extends React.Component{

    constructor(){
        super();

        //states to store the operations to be evaluated entered by user as question and the result in answer 
        this.state={
            question:'',
            answer:''
        };

        
        this.handleClick=this.handleClick.bind(this);
    }

    //whenever any button is clicked this function is called
    handleClick(event){
        const choice=event.target.value;
        this.setState({answer:''});
        
        switch(choice){

            //if Delete button is clicked delete characters from right
            case 'Delete':{
                //storing the string in question
                var str=this.state.question;

                // removing last entered charcter(i.e., rightmost one)
                str=str.substr(0,str.length-1);

                // assigning new string to question
                this.setState({question:str});
                break;
            }

            //if clear button is clicked then clear the entire memory(i.e., question and answer)
            case 'Clear':{
                this.setState({question:'',answer:''});
                break;
            }

            //when equal to button is clicked then evaluate the answer
            case '=':{
                var ans='';

                //checking for math error
                try{
                    ans=eval(this.state.question);
                }
                catch(err){
                    this.setState({answer:'Math error'});
                }

                if(ans===undefined){
                    this.setState({answer:'0'});
                }
                // if no errors encountered display the answer and clear the memory(i.e., question)
                else{
                    this.setState({answer:ans,question:''});
                    break;
                }
                break;
            }

            //default case accepts whatever button the user clicks (except those mentioned above) are concatenated to the string present in the question
            default:{
                this.setState(prevState => ({question: prevState.question + choice}));                

                // this.setState(({question: this.state.question += choice}));   This works too, just gives a warning
                break;
            }
    
        }
    }

    //render function which displays elements on the main html page(id="root" )
    render(){
        return (
            <div>
                <div className="Heading">
                    <CalciTitle value="Simple Calculator"/>
                </div>

            
                <div className="main">

                    <div className="Display">
                        <OutputScreen question={this.state.question} answer={this.state.answer}/>
                    </div>

                    <div className="keypad">

                        {/* creating rows of buttons */}

                        <div className="button-row">
                            {/* passing handleClick function and value as props */}

                            <Button handleClick={this.handleClick} value={'Clear'}/>
                            <Button handleClick={this.handleClick} value={'Delete'}/>
                            <Button handleClick={this.handleClick} value={'.'}/>
                            <Button handleClick={this.handleClick} value={'/'}/>
                        </div>

                        <div className="button-row">
                            <Button handleClick={this.handleClick} value={'7'}/>
                            <Button handleClick={this.handleClick} value={'8'}/>
                            <Button handleClick={this.handleClick} value={'9'}/>
                            <Button handleClick={this.handleClick} value={'*'}/>
                        </div>

                        <div className="button-row">
                            <Button handleClick={this.handleClick} value={'4'}/>
                            <Button handleClick={this.handleClick} value={'5'}/>
                            <Button handleClick={this.handleClick} value={'6'}/>
                            <Button handleClick={this.handleClick} value={'-'}/>
                        </div>


                        <div className="button-row">
                            <Button handleClick={this.handleClick} value={'1'}/>
                            <Button handleClick={this.handleClick} value={'2'}/>
                            <Button handleClick={this.handleClick} value={'3'}/>
                            <Button handleClick={this.handleClick} value={'+'}/>
                        </div>

                        <div className="button-row">
                            <Button handleClick={this.handleClick} value={'0'}/>
                            <Button handleClick={this.handleClick} value={'='}/>
                        </div>

                    </div>
                </div>
                
            </div>
            

        );
    }
}

//exporting Calci component to index.js
export default Calci;
