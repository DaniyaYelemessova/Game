const input = document.querySelector('#inputField');
const button = document.querySelector('.btn');
const computer = Math.floor(Math.random() * 20) + 1;

input.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        play()
    }
})


button.addEventListener('click', play);


function play(){
    const answer = document.querySelector('#inputField').value;
    
    if (answer < 1 || answer > 20){
Swal.fire({
    title: 'Enter number from 1 to 20',
    width: 700,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })
    }

    else if(isNaN(answer)){
        Swal.fire({
            title: 'Enter number, please!',
            width: 700,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
            `
          })
    }

    else{
        if(answer < computer){
            Swal.fire('Enter higher number!')
        }

        else if(answer > computer){
            Swal.fire('Try lower number!')
        }

        else{
            Swal.fire({
                title: 'Win!',
                imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
      }



}


