#pragma strict
public var MoreContent : GameObject;
//sound vars
var sound1 : AudioClip;
var sound2 : AudioClip;
var sound3 : AudioClip;
var sound4 : AudioClip;
var sound5 : AudioClip;
var sound6 : AudioClip;
var sound7 : AudioClip;
var sound8 : AudioClip;
var sound9 : AudioClip;
var sound10 : AudioClip;
var sound11 : AudioClip;
var sound12 : AudioClip;
var sound13 : AudioClip;
var sound14 : AudioClip;
var sound15 : AudioClip;
var sound16 : AudioClip;
var sound17 : AudioClip;
var sound18 : AudioClip;
var sound19 : AudioClip;
var sound20 : AudioClip;

var tsound1 : UnityEngine.UI.Text;
var tsound2 : UnityEngine.UI.Text;
var tsound3 : UnityEngine.UI.Text;
var tsound4 : UnityEngine.UI.Text;
var tsound5 : UnityEngine.UI.Text;
var tsound6 : UnityEngine.UI.Text;
var tsound7 : UnityEngine.UI.Text;
var tsound8 : UnityEngine.UI.Text;
var tsound9 : UnityEngine.UI.Text;
var tsound10 : UnityEngine.UI.Text;  
var tsound11 : UnityEngine.UI.Text;
var tsound12 : UnityEngine.UI.Text;
var tsound13 : UnityEngine.UI.Text;
var tsound14 : UnityEngine.UI.Text;
var tsound15 : UnityEngine.UI.Text;
var tsound16 : UnityEngine.UI.Text;
var tsound17 : UnityEngine.UI.Text;
var tsound18 : UnityEngine.UI.Text;
var tsound19 : UnityEngine.UI.Text;
var tsound20 : UnityEngine.UI.Text;

function Start () {
	tsound1.text = sound1.name; 
	tsound2.text = sound2.name; 
	tsound3.text = sound3.name; 
	tsound4.text = sound4.name; 
	tsound5.text = sound5.name; 
	tsound6.text = sound6.name; 
	tsound7.text = sound7.name; 
	tsound8.text = sound8.name; 
	tsound9.text = sound9.name; 
	tsound10.text = sound10.name; 
	tsound11.text = sound11.name; 
	tsound12.text = sound12.name; 
	tsound13.text = sound13.name; 
	tsound14.text = sound14.name; 
	tsound15.text = sound15.name; 
	tsound16.text = sound16.name; 
	tsound17.text = sound17.name; 
	tsound18.text = sound18.name; 
	tsound19.text = sound19.name; 
	tsound20.text = sound20.name; 
}

function More() {
	if (MoreContent.active) {
        MoreContent.SetActive (false);
    }else {
        MoreContent.SetActive (true);
    }
}

function NextLevel() {
	if (Application.loadedLevelName == "MainMenu") {
		Application.LoadLevel("MainMenu2");
	}else if (Application.loadedLevelName == "MainMenu2") {
		Application.LoadLevel("MainMenu");
	}
}

function Stahp() {
	GetComponent.<AudioSource>().Stop();
}

//sound Buttons
function sounds1() {
	GetComponent.<AudioSource>().PlayOneShot(sound1);
}

function sounds2() {
	GetComponent.<AudioSource>().PlayOneShot(sound2);
}

function sounds3() {
	GetComponent.<AudioSource>().PlayOneShot(sound3);
}

function sounds4() {
	GetComponent.<AudioSource>().PlayOneShot(sound4);
}

function sounds5() {
	GetComponent.<AudioSource>().PlayOneShot(sound5);
}

function sounds6() {
	GetComponent.<AudioSource>().PlayOneShot(sound6);
}

function sounds7() {
	GetComponent.<AudioSource>().PlayOneShot(sound7);
}

function sounds8() {
	GetComponent.<AudioSource>().PlayOneShot(sound8);
}

function sounds9() {
	GetComponent.<AudioSource>().PlayOneShot(sound9);
}

function sounds10() {
	GetComponent.<AudioSource>().PlayOneShot(sound10);
}

function sounds11() {
	GetComponent.<AudioSource>().PlayOneShot(sound11);
}

function sounds12() {
	GetComponent.<AudioSource>().PlayOneShot(sound12);
}

function sounds13() {
	GetComponent.<AudioSource>().PlayOneShot(sound13);
}

function sounds14() {
	GetComponent.<AudioSource>().PlayOneShot(sound14);
}

function sounds15() {
	GetComponent.<AudioSource>().PlayOneShot(sound15);
}

function sounds16() {
	GetComponent.<AudioSource>().PlayOneShot(sound16);
}

function sounds17() {
	GetComponent.<AudioSource>().PlayOneShot(sound17);
}

function sounds18() {
	GetComponent.<AudioSource>().PlayOneShot(sound18);
}

function sounds19() {
	GetComponent.<AudioSource>().PlayOneShot(sound19);
}

function sounds20() {
	GetComponent.<AudioSource>().PlayOneShot(sound20);
}