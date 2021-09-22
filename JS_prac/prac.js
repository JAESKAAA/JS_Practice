function solution(s){
    var answer = true;
    
    var arr = s.toUpperCase();
    var num=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='P') num++;
        if(arr[i]=='Y') num--;
    }
    answer = (num ===0)
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}