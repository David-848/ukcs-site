var sth=/\w+\s*/;

var word=/\w+/;

var passreg=/^[\w_\d@\.\$-]+$/;

var emlreg=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

var zipreg=/^\s*\d+\s*$/;

var phonereg=/^[+]{0,1}\d+([-]{0,1}\d+){0,2}$/;

var mobilereg=/^[+]{0,1}\d+$/;

var decreg=/^\d+[\.]{0,1}\d*/

var numreg=/\d+/



var decreg=/^\d+(\.{1}\d{1,2})?$/

var qtyreg=/^\s*\d+\s*$/;

var dtreg=/(19|20)\d\d[- \/.](0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])/;

var timereg=/((?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9])/

var emailreg=emlreg;



function popWindow(url,wid,height1)

{



 if(wid==undefined)

     wid=500;

	 if(height1==undefined)

	 height1=400;

left1=10+wid/2;

top1=10+height1/2;



var wind=window.open(url,'file1',"width="+wid+",height="+height1+",scrollbars=1,left="+left1+",top="+top1);

  









}

function validatead()

{



var ctl;

ctl=document.getElementById("link");

 if(ctl.value.search(sth)!=-1)



         if(ctl.value.indexOf(".")==-1 )

		 {

		 alert("Either leave url blank or fill it properly");

		 ctl.focus();

		 return false;

		 

		 }



ctl=document.getElementById("display");

 if(ctl.value.search(sth)==-1)

     {

	 

	 alert("Please enter message");

	 ctl.focus();

	 return false;

	 }







}





function getCtl(id)

{



var ctl=document.getElementById(id);

   return ctl;







}



function getValueById(id)

{

//alert(id);

var ctl=document.getElementById(id);

 

   

	return ctl.value;

	









}



function setValue(id,value1)

{





	var ctl1=document.getElementById(id);

       

	  ctl1.value=value1;

	     









}

function setHTML(id,value1)

{



var ctl1=document.getElementById(id);

       

	  ctl1.innerHTML=value1;









}





function getobject()

{

	

	 if(window.XMLHttpRequest) {

    	try {

			req = new XMLHttpRequest();

        } catch(e) {

			req = false;

        }

    

    } else if(window.ActiveXObject) {

       	try {

        	req = new ActiveXObject("Msxml2.XMLHTTP");

      	} catch(e) {

        	try {

          		req = new ActiveXObject("Microsoft.XMLHTTP");

        	} catch(e) {

          		req = false;

        	}

			

		}

    }



	

	return req;

	

	

	

}

function validateNumber(ctl)

{



if(ctl.value.search(qtyreg)==-1)

      {

	  

	  alert("Please enter a positive number");

	  ctl.focus();

	  return false;

	  

	  }





}











function validateTime(ctl)

{





if(ctl.value.search(timereg)==-1)

       {

	   

	   alert("Time is not in a proper format .Please enter time in hh:mm:ss format");

	   ctl.focus();

	   return false;

  

	   

	   }





}



function validateDate(ctl)

{



if(ctl.value.search(dtreg)==-1)

       {

	   

	   alert("Date is not in a proper format .Please enter date in yyyy-mm-dd format");

	   ctl.focus();

	   return false;

	   

	   

	   

	   }





}

function emptyDiv(divid)

 {

	 

	 

	ctl=getCtl(divid);

	

	if(ctl)

	   {

		   

		   

		ctl.innerHTML='';  

		   

	   }

	 

	 

	 

	 

 }



function validateDec(ctl)

{



if(ctl.value.search(decreg)==-1)

      {

	  

	  alert("Please enter valid decimal number upto 2 decimal places");

	  ctl.focus();

	  return false;

	  

	  }









}





  function goToUrl(ur)

  {

	  

	window.location.href=ur;  

	  

	  

	  

	  

  }



function goBack()

{

	

	if(window.history.back)

    {

		

		window.history.go(-1);	

		

	}

	

	

	

	

	

}



function checkAll(flag,prefix,tot)

{

	

	

	

	for(i=0;i<=tot;i++)

    {

		

		ctltemp=prefix+i;

		

		ctl=getCtl(ctltemp);

	

	  	if(ctl)

	    {

			ctl.checked=flag;	

		}

	}

	

	

}



function chkAll(ctl,prefix,tot)

{

	// alert(prefix);

	//alert(tot);

	  flag=ctl.checked;

	  

	  if(prefix==undefined)

	    prefix="checkbox";

		

		if(tot==undefined)

		tot='tot';

		

		checkAll(flag,prefix,getValueById(tot));

	  

	  

  }

function hideDiv(divid)

 {

	 

	 

	  ctltemp=getCtl(divid);   

	

	  if(ctltemp)

	  ctltemp.style.display="none"; 

	 

	 

	 

 }



function showDiv(divid)

   {

	   

	   

    ctltemp=getCtl(divid);   

	

	  if(ctltemp)

	  ctltemp.style.display="block";

	   

	   

	   

   }



function  confirmDelete(msg)



 {

	 

	 

	return window.confirm(msg); 

	 

	 

	 

 }

  function markSel(ind)

        {

	   if(getCtl('tot'))

	 tot1= getValueById('tot');

	  else

	  

	  tot1=50;

	  for(i=0;i<tot1;i++)

	     {

			 tempctl="tr"+i;

			 ctl1=getCtl(tempctl);

			 if(!ctl1)

			 continue;

			if(i%2==0)

			 {

				 

				 ctl1.className="tdf";

				 

			 }

			 else

			 {

				 

				 

				ctl1.className="tds"; 

				 

				 

			 }

			 

			 

			 

		 }

		 ct="tr"+ind;

		ct1= getCtl(ct);

		ct1.className="tdsel";

	  

  }

  



function changeText(sttext,id)

{

	ctl = getCtl(id);

	

	if(ctl.value==sttext)

	{

		ctl.value='';

	}

}



function setText(sttext,id)

{

	ctl = getCtl(id);

	

	if(ctl.value=='')

	{

		ctl.value=sttext;

	}

}





function checkParameter()

{

	

	ctl = getCtl('keyword');	

	

	if(ctl.value.search(sth)==-1)

	{

		alert("Please enter your search keyword");	

		ctl.focus();

		return false;

	}

	

	

	if(ctl.value=='Enter Keyword (s)')

	{

		alert("Please enter your search keyword");	

		ctl.focus();

		return false;

	}

	

	

	

	

	

	ctl = getCtl('searchcat');	

	

	if(ctl.value==0)

	{

		alert("Please select category");	

		ctl.focus();

		return false;

	}

	

}





function openInNewWindow(linkname,pid,ptype) 

{

 	xajax_setStoreClicks(pid,ptype);

 	

 	/*var newWindow = window.open(linkname.getAttribute('href'), '_blank');

 	newWindow.focus();*/

 	return false;

}





function checkValue2()

{



	ctl = getCtl('wlsearch2');

	if(ctl.value.search(sth)==-1 || ctl.value=='Full name or E-mail')

	{

		alert('Please enter Full name or E-mail');

		ctl.focus();

		return false;

	}

	

	window.location.href="wishlistresult.php?wlsearch="+ctl.value; 

}





function setSearchBox(textparam)

{

	ctl = getCtl('keyword');
	ctl.value = textparam;
	//ctl = getCtl('querySuggestList');
	emptyDiv('querySuggestList');
	document.frmsearchtop.submit();
}





function disEnbControl(mode)

{







	if(mode=='d')

	{

		document.frmsearchtop.cmdSearch.disabled=true;

		

		//alert('disable');

	}

	else if(mode=='e')

	{

		document.frmsearchtop.cmdSearch.disabled=false;

		//alert('enable');

	}
}





function createOption(ctlid ,text,value)
{

	ctl=getCtl(ctlid);	
	var opt=new Option(text,value);
	ctl.options.add(opt);



}

function setFocusById(id)
{
	ctl = getCtl(id);
	ctl.focus();
}



