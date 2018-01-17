#pragma strict
public var Tpaused : GameObject;
public var Tpaused2 : GameObject;
var paused : boolean = true;
//Sound var
var BRUH:AudioClip;
var DEEZ_NUTS:AudioClip;
var ICE_JJ_FISH:AudioClip;
var Illuminati:AudioClip;
var It_Was_99_Cents:AudioClip;
var John_cena:AudioClip;
var Notice_Me_Senpai:AudioClip;
var Oh_My_God_You_Killed_Kenny:AudioClip;
var SHOTS_FIRED:AudioClip;
var SMOKE_WEEK_EVERYDAY:AudioClip;
var SpongeBob_Run_Vine:AudioClip;
var Supa_Hot_Fire:AudioClip;
var Suprise_Motherfcker:AudioClip;
var Thug_Life_Music:AudioClip;
var Trump_is_Gay_Gay_Gay:AudioClip;
var Vine__Damn_Daniel_Sound_Effect:AudioClip;
var What_Are_Those_Original_Vine:AudioClip;
var Why_You_Always_Lying:AudioClip;
var WOMBO_COMBO:AudioClip;
var wow:AudioClip;
var Wwhy_You_Always_Lying:AudioClip;

function Start () {
	Tpaused.SetActive (false);
}
function Credits()
{
	Application.LoadLevel("Credits");
}
function MainMenu()
{
	Application.LoadLevel("MainMenu");
}
function pause()
{
	 if (paused == false)
        {
                paused = true;
                Tpaused.SetActive (true);
                Tpaused2.SetActive (false);
        }
     else if (paused == true)
        {
                paused = false;
                Tpaused.SetActive (false);
                Tpaused2.SetActive (true);
        }
}
//Sound Buttons
function Stahp()
{
	GetComponent.<AudioSource>().Stop();
}
function ABRUH()
{
	GetComponent.<AudioSource>().PlayOneShot(BRUH);
}
function ADEEZ_NUTS()
{
	GetComponent.<AudioSource>().PlayOneShot(DEEZ_NUTS);
}
function AICE_JJ_FISH()
{
	GetComponent.<AudioSource>().PlayOneShot(ICE_JJ_FISH);
}
function AIlluminati()
{
	GetComponent.<AudioSource>().PlayOneShot(Illuminati);
}
function AIt_Was_99_Cents()
{
	GetComponent.<AudioSource>().PlayOneShot(It_Was_99_Cents);
}
function AJohn_cena()
{
	GetComponent.<AudioSource>().PlayOneShot(John_cena);
}
function ANotice_Me_Senpai()
{
	GetComponent.<AudioSource>().PlayOneShot(Notice_Me_Senpai);
}
function AOh_My_God_You_Killed_Kenny()
{
	GetComponent.<AudioSource>().PlayOneShot(Oh_My_God_You_Killed_Kenny);
}
function ASHOTS_FIRED()
{
	GetComponent.<AudioSource>().PlayOneShot(SHOTS_FIRED);
}
function ASMOKE_WEEK_EVERYDAY()
{
	GetComponent.<AudioSource>().PlayOneShot(SMOKE_WEEK_EVERYDAY);
}
function ASpongeBob_Run_Vine()
{
	GetComponent.<AudioSource>().PlayOneShot(SpongeBob_Run_Vine);
}
function ASupa_Hot_Fire()
{
	GetComponent.<AudioSource>().PlayOneShot(Supa_Hot_Fire);
}
function ASuprise_Motherfcker()
{
	GetComponent.<AudioSource>().PlayOneShot(Suprise_Motherfcker);
}
function AThug_Life_Music()
{
	GetComponent.<AudioSource>().PlayOneShot(Thug_Life_Music);
}
function ATrump_is_Gay_Gay_Gay()
{
	GetComponent.<AudioSource>().PlayOneShot(Trump_is_Gay_Gay_Gay);
}
function AVine__Damn_Daniel_Sound_Effect()
{
	GetComponent.<AudioSource>().PlayOneShot(Vine__Damn_Daniel_Sound_Effect);
}
function AWhat_Are_Those_Original_Vine()
{
	GetComponent.<AudioSource>().PlayOneShot(What_Are_Those_Original_Vine);
}
function AWhat_is_Going_On_here()
{
	GetComponent.<AudioSource>().PlayOneShot(Why_You_Always_Lying);
}
function AWOMBO_COMBO()
{
	GetComponent.<AudioSource>().PlayOneShot(WOMBO_COMBO);
}
function AWwhy_You_Always_Lying()
{
	GetComponent.<AudioSource>().PlayOneShot(Wwhy_You_Always_Lying);
}