import { useState } from "react";
import nature from "../../img/medicine.jpg";

export default function App() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState("");

    function calculateBMI() {

        if (!weight || !height) {
            alert("Please enter both weight and height");
            return;
        }
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);

        let bmiStatus = getStatus(bmi);
        setStatus(bmiStatus);

        setHeight("");
        setWeight("");
    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Underweight";
        else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if (bmi >= 25 && bmi < 29.9) return "Overweight";
        else return "Obese";
    }

    return (
        
        <div className="absolute w-full h-[93vh] right-auto left-auto grid place-items-center bg-green-100" style={{ backgroundImage: `url(${nature})` }}>
            <div className="w-full max-w-xs m-10 ">
                <form className="absolute top-16 bg-gray-100 shadow-md border rounded-xl border-green-500 px-8 pt-6 pb-8 mt-1">
                    <h1 className="text-center text-green-600 mb-4 text-xl font-semibold"> BMI Calculator</h1>
                    <p className=" relative max-w-[250px] text-sm text-gray-500 text-center pb-5">Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username">
                            Height
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Height "
                            type="text"
                            placeholder="Height in cm"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                        >
                            Weight
                        </label>
                        <input
                            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="Weight"
                            type="Weight in kg"
                            placeholder="Weight in kg"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={calculateBMI}
                        >
                            Calculate BMI
                        </button>
                    </div>
                    {bmiResult && (
                        <div className="mt-4">
                            <p>Your BMI is: {bmiResult} </p>
                            <p>You are currently: {status}</p>
                        </div>
                    )}
                </form>

            </div>
        </div>
    );
}
