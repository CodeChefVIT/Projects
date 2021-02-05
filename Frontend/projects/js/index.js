<<<<<<< HEAD

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //	$.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){
		//	 for(var i = 0; i<data.result.length; i++) {
		//	  var node =`<div class="d-flex justify-content-center"> <h1 >"${data.result[i].title}"</h1></div>`
		//	 
		//	  $('#a13').append(node);
		//	}

		//	})                                                                                                                                    .    


		//   }
		//   else {
		//     const errorMessage = document.createElement('marquee')
		//     errorMessage.textContent = `Gah, it's not working!`
		//     app.appendChild(errorMessage)
		//   }
		// }

		// request.send()
		//	$.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){
		//	  console.log(data)


		//	  for(var i = 0; i<data.result.length; i++) {
		//		var node = `<div id="adit" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
		//										<img src="${data.result[i].photo}" class="img-fluid  mx-auto d-block" alt="img1" style="border-radius:10%;height: 150px; width: 150px;">
		//							</div>`;
		//		  console.log(node);

		//	 $('#a12').append(node);
		//	  }
		//	})



		$(document).ready(function () {
			$('[data-toggle="popover"]').popover();
		});
		$('#carousel-example').on('slide.bs.carousel', function (e) {

			var $e = $(e.relatedTarget);
			var idx = $e.index();
			var itemsPerSlide = 4;
			var totalItems = $('.carousel-item').length;

			if (idx >= totalItems - (itemsPerSlide - 1)) {
				var it = itemsPerSlide - (totalItems - idx);
				for (var i = 0; i < it; i++) {
					// append slides to end
					if (e.direction == "left") {
						$('.carousel-item').eq(i).appendTo('.carousel-inner');
					}
					else {
						$('.carousel-item').eq(1).appendTo('.carousel-inner');
					}
				}
			}
		});
		const floating_btn = document.querySelector('.floating-btn');
		const close_btn = document.querySelector('.close-btn');
		const social_panel_container = document.querySelector('.social-panel-container');

		floating_btn.addEventListener('click', () => {
			social_panel_container.classList.toggle('visible')
		});

		close_btn.addEventListener('click', () => {
			social_panel_container.classList.remove('visible')
		});



		$(document).ready(function () {
			var current = 1;

			widget = $(".step");
			btnnext = $(".next");
			btnback = $(".back");
			btnsubmit = $(".submit");

			// Init buttons and UI
			widget.not(':eq(0)').hide();
			hideButtons(current);
			setProgress(current);

			// Next button click action
			btnnext.click(function () {
				if (current < widget.length) {
					widget.show();
					widget.not(':eq(' + (current++) + ')').hide();
					setProgress(current);
					//alert("I was called from btnNext");
				}
				hideButtons(current);
			});

			// Back button click action 	
			btnback.click(function () {
				if (current > 1) {
					current = current - 2;
					btnnext.trigger('click');
				}
				hideButtons(current);
			});
		});

		// Change progress bar action
		setProgress = function (currstep) {
			var percent = parseFloat(100 / widget.length) * currstep;
			percent = percent.toFixed();
			$(".progress-bar")
				.css("width", percent + "%")
				.html(percent + "%");
		}

		// Hide buttons according to the current step
		hideButtons = function (current) {
			var limit = parseInt(widget.length);

			$(".action").hide();

			if (current < limit) btnnext.show();
			if (current > 1) btnback.show();
			if (current == limit) { btnnext.hide(); btnsubmit.show(); }
		}

		//commits
		// $.get('https://projects-cc.herokuapp.com/projects/commits/5f1d22185e97101834a990d4', function(data,status){

		//   for(var i = 0; i<data.result.length; i++) {
		//    var node2 =` <div class="d-flex justify-content-center">${data.result[i].commits}</div>`
		//    console.log(node2);
		//    $('.b1').append(node2);
		//   }

		//   });








		//API INTEGRATION BACKEND TO FRONTEND 

		$.get('https://projects-cc.herokuapp.com/projects/all', function (data, status) {
			console.log(data);
			console.log('TEST API')


			for (var i = 0; i < data.result.length; i++) {
				if (i === 0)
					var item = `<div class="carousel-item active col-12 col-sm-6 col-md-4 col-lg-3">
						<button class="project-info" id="${i}"><img src="${data.result[i].photo}" class="img-fluid  mx-auto d-block"
							alt="img8" style="border-radius:10% ;height:150px; width: 150px;"></button>
					</div>`
				else
					var item = `<div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
						<button class="project-info" id="${i}"><img src="${data.result[i].photo}" class="img-fluid  mx-auto d-block"
							alt="img8" style="border-radius:10% ;height:150px; width: 150px;"></button>
					</div>`
				console.log(item);
				$("#allCar").append(item);
			}
			$(".project-info").click(function () {
				var app = this.id;
				var idfetch = `<div class="d-flex justify-content-center"> <h1 >${data.result[app].title}</h1></div>`;
				$('#title').html(idfetch);
				var descriptionfetch = `<div class="d-flex justify-content-center"> <span align="center">${data.result[app].description}</span></div>`;
				console.log(descriptionfetch);
				$('#description').html(descriptionfetch);
				console.log(data.result[app].title);
				var mentorfetch = `<div class="d-flex justify-content-center"><b>Mentors: </b><span class="badge badge-pill badge-primary">${data.result[app].mentors}</span></div>`;
				console.log(mentorfetch);
				$('#Mentors').html(mentorfetch);
			})
		});








//Web integration

$.get('https://projects-cc.herokuapp.com/projects/web', function (data, status) {
			console.log(data);
			console.log('TEST API')


			for (var i = 0; i < data.result.length; i++) {
				if (i === 0)
					var item = `<div class="carousel-item active col-12 col-sm-6 col-md-4 col-lg-3">
						<button class="project-info-web" id="${i}"><img src="${data.result[i].photo}" class="img-fluid  mx-auto d-block"
							alt="img8" style="border-radius:10% ;height:150px; width: 150px;"></button>
					</div>`
				else
					var item = `<div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
						<button class="project-info-web" id="${i}"><img src="${data.result[i].photo}" class="img-fluid  mx-auto d-block"
							alt="img8" style="border-radius:10% ;height:150px; width: 150px;"></button>
					</div>`
				console.log(item);
				$("#webproject").append(item);
			}
			$(".project-info-web").click(function () {
				var app = this.id;
				var idfetch = `<div class="d-flex justify-content-center"> <h1 >${data.result[app].title}</h1></div>`;
				$('#title').html(idfetch);
				var descriptionfetch = `<div class="d-flex justify-content-center"> <span align="center">${data.result[app].description}</span></div>`;
				console.log(descriptionfetch);
				$('#description').html(descriptionfetch);
				console.log(data.result[app].title);
				var mentorfetch = `<div class="d-flex justify-content-center"><b>Mentors: </b><span class="badge badge-pill badge-primary">${data.result[app].mentors}</span></div>`;
				console.log(mentorfetch);
				$('#Mentors').html(mentorfetch);
			})
		});




















        //    function navtab12(id)  {



// console.log("hey " + id );


//    var node41 =`${data.result[0].id}`

//    console.log(node41);


// // 

// var idfetch = `<div class="d-flex justify-content-center"> <h1 >${data.result[id].title}</h1></div>`
//     $('#a13').append(idfetch);
// console.log(data.result[id].title);
// alert(idfetch);



//   };


  // $(".button1").click(function()  {
  // // $.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){
  //   console.log("hey");
  //   alert("The paragraph was clicked.");

  //    for(var i = 0; i<data.result.length; i++) {
  //      var nodeid =`<div class="d-flex justify-content-center"> <h1 >${data.result[0].id}</h1></div>`

  //    console.log("hey i am " + nodeid);

  //    } })});
// TITLE

// $.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){
//     var storedata =  new Array(data.result.title);
//     console.log('hey' + storedata[5]);
//    // for(var i = 0;  i<data.result.length; i++) {
//      var node1 =`<div class="d-flex justify-content-center"> <h1 >${data.result[2].title}</h1></div>`

//      console.log(node1);
//      $('#a13').append(node1);

//       var node1 =`<div class="d-flex justify-content-center"> <span align="center">"${data.result[1].description}"</span></div>`
//    console.log(node1);

//    $('#description').append(node1);



//     var node2 =` <div class="d-flex justify-content-center"><b>Mentors: </b>"${data.result[0].mentors}"</div>`
//    console.log(node2);
//    $('#Mentors').append(node2);
//     });



//  var node5 =` <div class="d-flex justify-content-center">"${data.result[0].commits}"</div>`
//    console.log("hey i am node 5" + node5);
//    $('.b1').append(node2);




//     $( ".button1" ).click(function()  {
//       $.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){

//      for(var i = 0; i<data.result.length; i++) {
//        var nodeid =`<div class="d-flex justify-content-center"> <h1 >${data.result[0].id}</h1></div>`

//      console.log("hey i am " + nodeid);

//      } })}); 
//    $.get('https://projects-cc.herokuapp.com/projects/5f1d22185e97101834a990d4/comments', function(data,status){
// for(var i = 0; i<data.comments.length; i++) {
//    var node2 =` <div class="d-flex justify-content-center">${data.comments[i].text}</div>`
//    console.log(node2);
//    $('.b').append(node2);
//   }
//   })

=======
alert('hello hey');

// app.innerHTML = "<b>dwwikdhaidiiwa</b>";
// app.innerHTML += "<h2>Card Header and Footer</h2>"+
//         '<div class="card">'+
//           '<div class="card-header">Header</div>'+
//        '   <div class="card-body">Content</div> '+
//          ' <div class="card-footer">Footer</div>'+
//      '  </div><h2>Card Header and Footer</h2>'
// const container = document.createElement('div')
// container.setAttribute('class', 'container')

// app.appendChild(logo)
// app.appendChild(container)

// var request = new XMLHttpRequest()
// request.open('GET', 'https://projects-cc.herokuapp.com/projects/all', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//     for(var i=0;i<2;i++)  
//     {
//     //   const card = document.createElement('div')
//     //   card.setAttribute('class', 'card')

//     //   const h1 = document.createElement('h1')
//     //   h1.textContent = data.result[i].repo
       
//     //   const h2 = document.createElement('h2')
//     //   h2.textContent = data.result[i].description

//     //   const m =document.createElement('img')
//     //   m.src = data.result[i].photo


//     //   container.appendChild(card)
//     //   card.appendChild(h1)
//     //   card.appendChild(h2)
//     //   card.appendChild(m)

//     // app.inn
//     app.innerHTML += "<h2>Card Header and Footer</h2>"+
//         '<div class="card">'+
//           '<div class="card-header">+data.result[0].ideaBy+</div>'+
//        '   <div class="card-body">Content</div> '+
//          ' <div class="card-footer">Footer</div>'+
//      '  </div><h2>Card Header and Footer</h2>'

//        console.log('daidoawnfa')
    

//     }
$.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){
 for(var i = 0; i<data.result.length; i++) {
  var node =`<div class="d-flex justify-content-center"> <h1 >"${data.result[i].title}"</h1></div>`
 
  $('#a13').append(node);
}

})                                                                                                                                    .    


//   }
//   else {
//     const errorMessage = document.createElement('marquee')
//     errorMessage.textContent = `Gah, it's not working!`
//     app.appendChild(errorMessage)
//   }
// }

// request.send()
$.get('https://projects-cc.herokuapp.com/projects/all', function(data,status){
  console.log(data)

  
  for(var i = 0; i<data.result.length; i++) {
    var node = `<div id="adit" class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                    				<img src="${data.result[i].photo}" class="img-fluid  mx-auto d-block" alt="img1" style="border-radius:10%;height: 150px; width: 150px;">
                        </div>`;
      console.log(node);

 $('#a12').append(node);
  }
})
>>>>>>> e78f3de4a690039cf739a37e7057c3dab3995ead
