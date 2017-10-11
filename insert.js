// SplitJS HTML editor insert.js
// Insert elements into editor textarea
// Created in 2017 by Brandon Bell in the United States of America. All rights reserved.

// 0- Universal
// Display browser information in browser's console, event listeners for functions
	var displayBrowser = navigator.appName;
	var displayBrowserVersion = navigator.appVersion;
	console.log(displayBrowser + displayBrowserVersion);
	console.log("The height of your browser window is " + window.innerHeight + " pixels.");
	console.log("The width of your browser window is " + window.innerWidth + " pixels.");


// 1- Tables
// For use in creating tables in the editor.

	function tablePrintAreaClear() {
		"use strict";
		document.getElementById("errorPrintArea").innerHTML = " ";
		document.getElementById("tablePrintArea").innerHTML = "&lt;table&gt;&lt;tr&gt;";
		document.getElementById("inputNewTable").value = " ";
	}
	
	function rowPrintAreaClear() {
		"use strict";
		document.getElementById("errorPrintArea").innerHTML = " ";
		document.getElementById("rowPrintArea").innerHTML = "&lt;tr&gt;";
		document.getElementById("inputNewRow").value = " ";
	}
	
	function errorClear() {
		"use strict";
		document.getElementById("errorPrintArea").innerHTML = " ";

	}

	function inputTable() {
		"use strict";
		console.log("inputTable function successful.");
		var inputTableValue = String(document.getElementById("inputNewTable").value);
		var inputTableTest = inputTableValue.includes("<script");
		if (inputTableTest === false) {
			console.log("inputTableTest successful.");
			var delimitInputTableValue = inputTableValue.split(" ");
			console.log(delimitInputTableValue);
			if (Array.isArray(delimitInputTableValue) === true){
				console.log("if Array.isArray stage successful.");
				var inputTableValueLength = delimitInputTableValue.length;
				for (i=0;i < inputTableValueLength;i++){
					document.getElementById("tablePrintArea").innerHTML +="&lt;td&gt;" + delimitInputTableValue[i] + "&lt;/td&gt;";
				}
				console.log("Printing of inputTableValue successful.");
				document.getElementById("errorPrintArea").innerHTML = " ";
				} else {
				console.log("if Array.isArray stage failed.");
				document.getElementById("errorPrintArea").innerHTML = " ";
				document.getElementById("errorPrintArea").innerHTML = "<p style='color:red;'>The value entered could not be delimited by spaces.</p>";
				}
		} else {
			console.log("inputTable stopped: Character or phrase not allowed");
			document.getElementById("errorPrintArea").innerHTML = " ";
			document.getElementById("errorPrintArea").innerHTML = "<p class='error-red'>The value you have entered includes a character or phrase that is not allowed.</p>";
		}
		
	}
	function inputRow() {
		"use strict";
		console.log("inputRow function successful.");
		var inputRowValue = String(document.getElementById("inputNewRow").value);
		var inputRowTest = inputRowValue.includes("<script");
		if (inputRowTest === false) {
			console.log("inputRowTest successful.");
			var delimitInputRowValue = inputRowValue.split(" ");
			console.log(delimitInputRowValue);
			if (Array.isArray(delimitInputRowValue) === true){
				console.log("if Array.isArray stage successful.");
				var inputRowValueLength = delimitInputRowValue.length;
				for (i=0;i < inputRowValueLength;i++){
					document.getElementById("rowPrintArea").innerHTML +="&lt;td&gt;" + delimitInputRowValue[i] + "&lt;/td&gt;";
				}
				console.log("Printing of inputRowValue successful.");
				document.getElementById("errorPrintArea").innerHTML = " ";
				} else {
				console.log("if Array.isArray stage failed.");
				document.getElementById("errorPrintArea").innerHTML = " ";
				document.getElementById("errorPrintArea").innerHTML = "<p class='error-red'>The value entered could not be delimited by spaces.</p>";
			}
		} else {
			console.log("inputRow stopped: Character or phrase not allowed.");
			document.getElementById("errorPrintArea").innerHTML = " ";
			document.getElementById("errorPrintArea").innerHTML = "<p class='error-red'>The value you have entered includes characters that are not allowed.";
		}
		
	}
	
	function commitTable() {
		"use strict";
		console.log("commitTable function started.");
		document.getElementById("errorPrintArea").innerHTML = " ";
		var commitTableValue = String(document.getElementById("inputNewTable").value);
		var delimitCommitTableValue = commitTableValue.split(" ");
		var commitTableValueLength = delimitCommitTableValue.length;
		document.getElementById("document-box").value += "<table>" + "<tr>";
		for (i=0;i < commitTableValueLength;i++){
			document.getElementById("document-box").value +="<td>" + delimitCommitTableValue[i] + "</td>";
			}
		document.getElementById("document-box").value += "</tr></table>";
		document.getElementById("tablePrintArea").innerHTML = "&lt;table&gt;&lt;tr&gt;";
		document.getElementById("inputNewTable").value = " ";
		console.log("commitTable function completed.");
		
	}
	
	function commitRow() {
		"use strict";
		console.log("commitRow function started.");
		document.getElementById("errorPrintArea").innerHTML = " ";
		var commitRowValue = String(document.getElementById("inputNewRow").value);
		var delimitCommitRowValue = commitRowValue.split(" ");
		var commitRowValueLength = delimitCommitRowValue.length;
		document.getElementById("document-box").value += "<tr>";
		for (i=0;i < commitRowValueLength;i++){
			document.getElementById("document-box").value +="<td>" + delimitCommitRowValue[i] + "</td>";
			}
		document.getElementById("document-box").value += "</tr>";
		document.getElementById("rowPrintArea").innerHTML = "&lt;tr&gt;";
		document.getElementById("inputNewRow").value = " ";
		console.log("commitRow function completed.");
	}

	function commitEndTable() {
		"use strict";
		console.log("commitEndTable function started.");
		document.getElementById("document-box").value += "</table>";
	}
	
// X- CSS class and ID insert tool
// Insert CSS class and ids into HTML code

function commitCSSClass() {
	"use strict";
	console.log("commitCSSClass function started.");
	var documentBoxValue = document.getElementById("document-box").value;
	var documentBoxCaretPosition = document.getElementById("document-box").value.slice(1,document.getElementById("document-box").selectionStart).length;
	var documentBoxCaretCorrectedPosition = documentBoxCaretPosition + 1;
	console.log("Testing documentBoxCaretPosition " + documentBoxCaretPosition);
	console.log("Testing documentBoxCaretCorrected Position " + documentBoxCaretCorrectedPosition);
	var commitCSSClassPhrase = " class=' '";
	var postCommitCSSClassValue = [documentBoxValue.slice(0, documentBoxCaretCorrectedPosition), commitCSSClassPhrase, documentBoxValue.slice(documentBoxCaretCorrectedPosition)].join("");
	console.log("Testing postCommitCSSClassValue: " + postCommitCSSClassValue);
	document.getElementById("document-box").value = postCommitCSSClassValue;
	
	
}

function commitCSSId() {
	"use strict";
	console.log("commitCSSId function started.");
	var documentBoxValue = document.getElementById("document-box").value;
	var documentBoxCaretPosition = document.getElementById("document-box").value.slice(1,document.getElementById("document-box").selectionStart).length;
	var documentBoxCaretCorrectedPosition = documentBoxCaretPosition + 1;
	console.log("Testing documentBoxCaretPosition " + documentBoxCaretPosition);
	console.log("Testing documentBoxCaretCorrected Position " + documentBoxCaretCorrectedPosition);
	var commitCSSIdPhrase = " id=' '";
	var postCommitCSSIdValue = [documentBoxValue.slice(0, documentBoxCaretCorrectedPosition), commitCSSIdPhrase, documentBoxValue.slice(documentBoxCaretCorrectedPosition)].join("");
	console.log("Testing postCommitCSSIdValue: " + postCommitCSSIdValue);
	document.getElementById("document-box").value = postCommitCSSIdValue;
}

function editCSS() {
	"use strict";
	console.log("editCSS function started.");
	var CSSCommitValue = document.getElementById("CSS-edit-element").innerHTML.value; /* NW */
	var CSSCommit = prompt(CSSCommitValue + "Insert your desired CSS code:"); /* CSSCommitValue = NW */
	var CSSCommitTest = CSSCommit.includes("<script");
	if (CSSCommitTest === true) {
		console.log("editCSS stopped: script tag within style tags");
		document.getElementById("errorPrintArea").innerHTML = "<p class='error-red'>Script tags are not allowed to be inserted within style tags. Click the 'Edit CSS' button to try again.</p>";
	} else {
	document.getElementById("errorPrintArea").innerHTML = "";
	console.log("Testing CSSCommit value: " + CSSCommit);
	document.getElementById("CSS-edit-element").innerHTML = CSSCommit;
	document.getElementById("errorPrintArea").innerHTML = "<p class='error-green' style='color:darkgreen'>CSS for preview edited.</p>";
}
}

function clearCSS() {
	"use strict";
	console.log("clearCSS function started.");
	document.getElementById("CSS-edit-element").innerHTML = "";
	document.getElementById("errorPrintArea").innerHTML = "<p class='error-green'  style='color:darkgreen'>CSS cleared.</p>";
}
// XX- Preview box
// For the lower HTML preview box

	function commitPreview() {
		"use strict";
		console.log("commitPreview function started.");
		var documentBoxValue = document.getElementById("document-box").value;
		var documentBoxValueTest = documentBoxValue.includes("<script");
		if (documentBoxValueTest === true) {
			console.log("Preview stopped: script tag in preview");
			document.getElementById("errorPrintArea").innerHTML = "<p class='error-red'>Script tags are not allowed in previews for security reasons. Please remove all script tags from the main text area and try again.</p>";
		} else {
		console.log(documentBoxValue);
		document.getElementById("preview-box").innerHTML = documentBoxValue;
		document.getElementById("errorPrintArea").innerHTML = "";
		}
	}

	function clearPreview() {
		"use strict";
		console.log("clearPreview function started.");
		document.getElementById("preview-box").innerHTML = "";
		document.getElementById("errorPrintArea").innerHTML = "";
	}

// XXX- Event listeners

	// 0- Dismiss errorPrintArea text
	var dismissErrorArray = document.getElementsByClassName("dismiss-error");
	console.log("Checking dismissErrorArray:" + dismissErrorArray);
	
	for (var i=0; i < dismissErrorArray.length; i++){
		dismissErrorArray[i].addEventListener("click", errorClear); /* NW */
	}

	// 1- Table
	document.getElementById("inputNewTable").addEventListener("change", inputTable);
	document.getElementById("inputNewRow").addEventListener("change", inputRow);
	document.getElementById("clear-table").addEventListener("click", tablePrintAreaClear);
	document.getElementById("clear-row").addEventListener("click", rowPrintAreaClear);

	document.getElementById("commit-table").addEventListener("click", commitTable);
	document.getElementById("commit-row").addEventListener("click", commitRow);

	document.getElementById("tableendtag-row").addEventListener("click", commitEndTable);
	document.getElementById("tableendtag-table").addEventListener("click", commitEndTable);

	// X- CSS Class and ID
	document.getElementById("css-class-button").addEventListener("click", commitCSSClass);
	document.getElementById("css-id-button").addEventListener("click", commitCSSId);
	document.getElementById("css-edit-button").addEventListener("click", editCSS);
	document.getElementById("css-clear-button").addEventListener("click", clearCSS);

	// XX- Preview box
	document.getElementById("commit-preview").addEventListener("click", commitPreview);
	document.getElementById("clear-preview").addEventListener("click", clearPreview);
	document.getElementById("document-box").addEventListener("change", commitPreview);

	
	
