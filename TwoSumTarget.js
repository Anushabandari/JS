function TwoSumArray(arr,target)
{
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
             if(arr[i]+arr[j]==target)
             {
                 console.log([arr[i],arr[j]]);
                 return;
             }  
        }
    }
    console.log("not found");
}
// TwoSumArray([2,5,6,7,8],15)


function TwoSumArraySet(arr1,target)
{
    var key=new Set();
    for(var i=0;i<arr1.length;i++)
    {
        debugger;
        if(Key.has(arr1[i]))
        {
            return true;
        }
        else{
            if(!key.has(target-arr1[i])){
                Key.add(target-arr1[i]);
            }
        }
    }
    return false;
     
}

function TwoSumArrayMap(arr,target)
{
    var Key=new Map();
    var output = [];
    for(var i=0;i<arr.length;i++)
    {
        if(Key.has(arr[i]))
        {
            output.push( [i,Key.get(arr[i])]);
        }
        else{
            if(!Key.has(target-arr[i]))
            {
                Key.set(target-arr[i],i);
            }
        }
    }
    return output;
     
}



