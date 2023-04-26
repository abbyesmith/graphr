// import NavBar from './navbar'
// // console.log("here")
// import { Expression, GraphingCalculator } from 'desmos-react'


// // {/* <script src="https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script> */}

// export default function Desmos() {

//     const elt = document.getElementById('calculator');
//     const calculator = Desmos.Calculator(elt);
//     calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
//     return (
//       <div>
//         <script src="https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
//         <NavBar />
//         <h1>Desmos</h1>
//         <div id="calculator" style="width: 600px; height: 400px;"></div>
//         <script>
//             var elt = document.getElementById('calculator');
//             var calculator = Desmos.GraphingCalculator(elt);
//         </script>


//       </div>
//     )
//   }

// import Desmos from 'desmos'
import { useCalculator } from "desmos-react";
// import "./styles.css";
import Link from 'next/link'
import NavBar from './navbar'
import dynamic from 'next/dynamic'
// const desmos = require('desmos-react')
// const GraphingCalculator = dynamic(() => import('desmos-react').then((module)=>module.GraphingCalculator),{ssr: false})
// const desmos = dynamic(() => import('desmos-react'),{ssr: false})
// const Expression = dynamic(() => import('desmos-react').then((module)=>module.Expression),{ssr: false})
function App() {
    // console.log(GraphingCalculator)
  return (
    // <desmos></desmos>
    // <>
    // <GraphingCalculator attributes={{ className: "calculator" }} projectorMode>
    //   <Expression id="fn" latex="x^2" />
    // </GraphingCalculator>
    // </>
    <div>
        <NavBar />
    </div>
  );
}

export default App;



// const elt = document.createElement('div')
// elt.style.width = '600px'
// elt.style.height = '400px'

// const calculator = Desmos.GraphingCalculator(elt)
// calculator.setExpression({ id: 'graph1', latex: 'y=x^2' })

// document.body.prepend(elt)
// Load the Desmos API script with your API key

// const apiKey = 'dcb31709b452b1cf9dc26972add0fda6';
// const script = document.createElement('script');
// script.src = `https://www.desmos.com/api/v1.6/calculator.js?apiKey=${apiKey}`;
// document.head.appendChild(script);

// // Wait for the Desmos script to load
// script.onload = function() {
//   // Create a new Desmos calculator object
//   const elt = document.getElementById('calculator');
//   const calculator = Desmos.Calculator(elt);

//   // Set the expressions in the calculator
//   calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
//   calculator.setExpression({ id: 'graph2', latex: 'y=sin(x)' });

//   // Listen for changes to the expressions in the calculator
//   calculator.observeEvent('change', function() {
//     // console.log('Calculator expressions changed');
//   });
// }

