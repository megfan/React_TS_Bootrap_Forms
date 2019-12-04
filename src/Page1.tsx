import React, { useState, useContext } from 'react';
import { CounterStoreContext } from './store/CounterStore';
import { observer } from 'mobx-react-lite'

interface Props {
    page: () => void;
}

const Page1: React.FC<Props> = observer(({page}) => {
    const counterStore:any = useContext(CounterStoreContext);
    const [text, setText] = useState<string>("Click me 5 times!");
    const [paragraf, setParagraf] = useState<{txt: string, def: any}>({def: '', txt:''});

    function handleClick() {  
        counterStore.count++;  
        setText('Oh! yea.');
        setParagraf({def: `${5 - counterStore.count}`, txt: ' left'});
        if(counterStore.count === 5){
            setText("that's enough!");
            setParagraf({def: '', txt: ''});            
        }     
        if(counterStore.count === 6){
            page(); 
        }     
    }
    
    return (
        <div className="page page1">
            <h1>{text} {paragraf.def}{paragraf.txt}</h1>
            <p>
                {counterStore.count}
            </p>
            <button onClick={handleClick}>CLick</button>  
        </div>
    );
})
export default Page1;