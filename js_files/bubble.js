 async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

//IN THIS FN WHEN THE BUTTON IS CLICKED WE DISABBLED ALL THE BUTTONS SO THAT NO OTHER BUTTONS 
//CAN BE CLICKED WHILE SORTING.WE DISABLED THE SIZE SLIDING BAR SO THAT SIZE CANNOT BE CANGE IN BETWEEN
//ALSO DISABLED THE NEWARRAY BUTTONS
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();//WHEN EVER BUBBLE SORTING IS FINSHED THE BUTTONS ARE ENABLED SO THATS WHY WE HAVE USED AWAIT.
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
