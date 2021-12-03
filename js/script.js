fetch('activities.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        // const col = document.querySelector('.col-md-6')
        // console.log(col)
        // col.style.backgroundColor = "blue"
        // const colList = document.querySelectorAll('.col-md-6')
        // console.log(colList)
        // colList[1].style.backgroundColor = "orange"
        // colList.forEach(element => {
        //     element.style.backgroundColor = "orange"
        // })

        // const div = document.createElement('div')
        // div.classList.add('container')
        // console.log(div)
        // const body = document.body
        // console.log(body)
        // body.append(div)
        // body.prepend(div)

        data.map(element => {
          
            // create object html h3
         const div = document.createElement('h3')
            // insert value title

        div.classList.add("title")
            // insert object h3 into .activities
let acti = 
            div.append(title)
            
            return hello




            


           






        });

          


    })
    .catch(error => console.log(error))