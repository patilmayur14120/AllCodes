function deleteoneelement(st)
{

    return st.slice(0,-1);
   
}
function parseCalculationString(s) {
    
    var calculation = [],calculus=[],
        current = '';
        
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                calculation.push(ch);
            }
            else if(current=='')
            {
                calculation.push(ch);
            }
            else {
            
                calculation.push(parseFloat(current),ch);
                current = '';
                
            }
        } 
        else if('('.indexOf(ch)>-1)
        {
                calculation.push(ch);

            
           
        }
        else if(')'.indexOf(ch)>-1)
        {
            if(ch==')' && s.charAt(i-1)==')')
            {
                calculation.push(ch);

            }
            else
            {
                calculation.push(parseFloat(current),ch);
                current="";
            }
            
        }
        else {
            
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
   
    //calculation=calculation.filter(feelter);
   
   
    return calculation;
}
// function feelter(calc)
// {
    
//         switch(calc)
//         {
//             case isNaN: return false;
    
//             default : return true;
//         }
    
    
    
// }


function calculate(calc) {
    
    
    console.log(calc);
            while(calc.length>1)
            {
                while(calc.includes("("))
                {
                nestedFindBrac(calc);
                }
                while(calc.includes("/"))
                {
                findDiv(calc);
                }
                while(calc.includes("*"))
                {
                findMul(calc);
                }
                while(calc.includes("+"))
                {
                findAdd(calc);
                }
                findSub(calc);
            }
    
    return calc;
}



function findDiv(calc)
{
    for(var i=0;i<calc.length;i++)
    {
        if(calc[i]=='/')
        {
            middiv(calc,i);
        }
    }
    return calc;
}

function findMul(calc)
{
    for(var i=0;i<calc.length;i++)
    {
        if(calc[i]=='*')
        {
            midmul(calc,i);
        }
    }
    return calc;
}

function findAdd(calc)
{
    for(var i=0;i<calc.length;i++)
    {
        if(calc[i]=='+')
        {
            midadd(calc,i);
        }
    }
    return calc;
}

function findSub(calc)
{
    for(var i=0;i<calc.length;i++)
    {
        if(calc[i]=='-')
        {
            midsub(calc,i);
        }
    }
    return calc;
}
// function findBrac(calc)
// {
//     var pos1=0,pos2=0;
//     for(var i=0;i<calc.length;i++)
//     {
//         if(calc[i]=="(")
//         {
//             pos1=i;
//             for(var t=pos1+1;t<calc.length;t++)
//             {
//                 if(calc[t]==")")
//                 {
//                     console.log(')');
//                     pos2=t;
//                     var bres= midbrac(calc,pos1,pos2);
//                     console.log(bres);
//                     t=calc.length;
//                     break;
                   
//                 }
                
//             }
//             i=calc.length;
//             break;

//         }

//     }
//     return bres;

// }
function nestedFindBrac(calc)
{
    var pos1,pos2;
    var flag=-1;
    for(var i=0;i<calc.length;i++)
    {
        
        if(calc[i]=='(')
        {
            pos1=i;
            for(var j=i+1;j<calc.length;j++)
            {
                if(calc[j]=='(')
                {
                    
                    for(var k=j+1;k<calc.length;k++)
                    {
                        if(calc[k]==")")
                        {
                            pos1=j;
                            pos2=k;
                            var bres=midbrac(calc,pos1,pos2);
                            falg=1;
                            j=calc.length;
                            i=calc.length;
                            break;
                        }
                    }
                }
                else if(calc[j]==')')
                {
                    
                            pos2=j;
                            var bres=midbrac(calc,pos1,pos2);
                            flag=1;
                            j=calc.length;
                            i=calc.length;
                            break;
                        
                    

                }
            }
            

        }
        
    }
    return bres;
}

function midadd(calc,pos)
{
    var mres=calc[pos-1]+calc[pos+1];
    return midrearrange(mres,calc,pos);
}

function midsub(calc,pos)
{
    var mres=calc[pos-1]-calc[pos+1];
    return midrearrange(mres,calc,pos);
}

function midmul(calc,pos)
{
    var mres=calc[pos-1]*calc[pos+1];
    return midrearrange(mres,calc,pos);
}

function middiv(calc,pos)
{
    var mres=calc[pos-1]/calc[pos+1];
    return midrearrange(mres,calc,pos);
}
function midbrac(calc,pos1,pos2)
{
    
    var newcalc=[];
    newcalc=calc.slice(pos1+1,pos2);
    console.log(newcalc);
    var bracres= calculate(newcalc);
    console.log(bracres);
    return bracrearrange(bracres,calc,pos1,pos2);
}
function midrearrange(mres,calc,pos)
{
    calc[pos-1]=mres;
    for(var i=pos;i<calc.length;i++)
    {
        calc[i]=calc[i+2];
    }
    calc.pop();
    calc.pop();
    return calc;
}


function bracrearrange(bracres,calc,pos1,pos2)
{
    console.log(calc);
    calc[pos1]=bracres[0];
    var newpos=(pos2+1)-(pos1+1);
    for(var i=pos1+1;i<calc.length;i++)
    {
         
         calc[i]=calc[i+newpos];
    }
    for(var i=0;i<newpos;i++)
    {
        calc.pop();
    }
    console.log(calc);
    return calc;
}
