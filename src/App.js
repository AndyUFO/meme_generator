import './App.css';
import {useState} from "react";
import html2canvas from "html2canvas";

function App() {


    const [linea1,setLinea1] = useState('');
    const [linea2,setLinea2] = useState('');
    const [imagen,setImagen] = useState('fire');
    const onChangeLinea1 = function (evento){
        //debugger;
        setLinea1(evento.target.value);
    };

    const onChangeLinea2 = function (evento){
        //debugger;
        setLinea2(evento.target.value);
    };

    const onChangeImagen = function (evento){
        //debugger;
        setImagen(evento.target.value);

    };

    const onClickExportar = function (evento) {

        html2canvas(document.querySelector("#meme")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
    }


    return (
        <div className="App">
            <select id="imagenes" onChange={onChangeImagen}>
                <option value="fire">Casa en llamas</option>
                <option value="futurama">Futurama</option>
                <option value="history">History</option>
                <option value="matrix">Matrix</option>
                <option value="philosoraptor">PhilosoRaptor</option>
                <option value="smart">smart guy</option>
            </select><br/>
            <input onChange={onChangeLinea1} type="text" placeholder={"linea 1"}/><br></br>
            <input onChange={onChangeLinea2} type="text" placeholder={"linea 2"}/><br></br>
            <button onClick={onClickExportar}>Exportar</button>
            <div className="meme" id={"meme"}>
                <span>{linea1}</span><br/>
                <span>{linea2}</span>
                <img src={"/img/" + imagen + ".jpg"}/>
            </div>
        </div>
    );
}

export default App;
