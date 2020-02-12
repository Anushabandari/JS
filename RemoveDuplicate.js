function DuplicateArrEle(num)
{
    for(var i=0; i<num.length; i++)
    {
        for(var j=i+1;j<num.length;j++)
        {
           
            if(num[i]==num[j])
            {
                num.splice(j,1)
                j=j-1;
            }
        }
    }

    return num;
}

function DuplicateSet(nums)
{
  var Key=new Set()

  for(var i=0;i<nums.length;i++)
  {
      if(Key.has(nums[i]))
      {
          nums.splice(i,1)
          i=i-1;
      }
      else
      {
          Key.add(nums[i])
          
      }
  }
return nums;
    
}