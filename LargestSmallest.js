function MaxMin(nums)
{
    var max=Number.MIN_SAFE_INTEGER;
    var min=Number.MAX_SAFE_INTEGER;
    
    for(var i=0;i<nums.length;i++)
    {
       if( nums[i] > max)
       {
           max=nums[i];
       }
        if(nums[i] < min)
       {
           min=nums[i];
       }

     }
       
     return [max,min];
}

