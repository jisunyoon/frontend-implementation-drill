import { useState } from 'react';

export function CharacterCounter(){
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value.slice(0,100));
    }
    return(
        <>
            <textarea 
                className="count"
                value={text} 
                onChange={handleChange}
            ></textarea>
            <p className="remain">
                <span className={`remain__text ${
                    text.length >= 100 ? 'remain__text--danger'
                    : text.length >= 90 ? 'remain__text--warning'
                    : ''
                }`}>{text.length}</span>/100
            </p>
        </>
    )

}
