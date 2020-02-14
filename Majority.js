function Majority(arr)
{
    var Key=new Map();
    var MostTimes=0;
    var MajorElement;

    for(var i=0;i<arr.length;i++)
    {
        if( !Key.has(arr[i]))
        {
            Key.set(arr[i],1)          
        }
        else
        {
            Key.set(arr[i],Key.get(arr[i]) +1)
        }
    }
    for( var [k,v] of Key.entries())
    {
        if(MostTimes< v)
        {
            MostTimes=v;
            MajorElement= k;
        }
    }
     return [MajorElement,MostTimes];
}
