//PROBLEM 1
const sum=[1,2,3,4,5];
let SUM=0;
for(let i=0;i<sum.length;i++)
{
    SUM+=sum[i];
}
console.log("THE SUM OF THE ARRAY ELEMENTS = "+SUM);
//PROBLEM 2
const maxNumber = [10,5,8,20,3];
let temp=0;
for(let i=0;i<maxNumber.length;i++)
{
    for(let j=i+1;j<maxNumber.length;j++)
{
    if(maxNumber[i]>maxNumber[j])
    {
        temp=maxNumber[i];
        maxNumber[i]=maxNumber[j];
        maxNumber[j]=temp;
    }
}
}
console.log("THE MAXIMUM ELEMENT IN THE ARRAY IS "+maxNumber[maxNumber.length-1]);
//PROBLEM 3
const oddNumbers=[1,2,3,4,5];
console.log("THE ODD ELEMENTS IN THE ARRAY ARE : ");
for(let i=0;i<oddNumbers.length;i++)
{
    if(oddNumbers[i]%2!=0)
    {
     console.log(oddNumbers[i]);
    }
}
//PROBLEM 4
const isPalindromeResult= "radar";
const isNonPalindromeResult= "hello";
let ch1="",ch2="";
for(let i=isPalindromeResult.length-1;i>=0;i--)
{
ch1+=isPalindromeResult[i];
}
if(ch1==isPalindromeResult)
console.log(isPalindromeResult+" IS A PALINDROME WORD.");
else
console.log(isPalindromeResult+" IS NOT A PALINDROME WORD.");

for(let i=isNonPalindromeResult.length-1;i>=0;i--)
{
ch2+=isNonPalindromeResult[i];
}
if(ch2==isNonPalindromeResult)
console.log(isNonPalindromeResult+" IS A PALINDROME WORD.");
else
console.log(isNonPalindromeResult+" IS NOT A PALINDROME WORD.");
//PROBLEM 5
const missingNumber=[1,2,3,5,6];
let j=0;
console.log("THE MISSING ELEMENT IN THE ARRAY IS ")
for(i=1;i<=missingNumber[missingNumber.length-1];i++)
{
    if(i!=missingNumber[j])
    {
    console.log(i);
    i++;
    }
    j++;
}
//PROBLEM 6
const duplicateNumbers=[1,2,3,2,4,5,4];
console.log("THE DUPLICATE ELEMENTS IN THE ARRAY ARE ");
for(let i=0;i<duplicateNumbers.length;i++)
{
    for(let j=i+1;j<duplicateNumbers.length;j++)
    {
    if(duplicateNumbers[i]==duplicateNumbers[j])
    {
        console.log(duplicateNumbers[j]);
    }
}
}