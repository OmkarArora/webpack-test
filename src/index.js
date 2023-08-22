import { funcWithParam, sampleFunc } from "./utils";

window.sampleFuncFromWindow = sampleFunc;
window.funcWithParam = funcWithParam;

document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("btn");
	btn.addEventListener("click", sampleFunc);
});
