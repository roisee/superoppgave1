
$(function(){
    
    
        
        $(function(){
            
                        const personlistJSON = {
                            male: [
                                {name: "Arne", imageSrc: "arne.jpg", age: 25, description: "Cool guy with lots of friends", gender:"Male" },
                                {name: "Filip", imageSrc: "filip.jpg", age: 31, description: "Cooler than Arne", gender:"Male" },
                                {name: "Mark", imageSrc: "mark.jpg", age: 24, description: "Tall akward dude, who plays discgolf", gender:"Male" },
                                {name: "Peter", imageSrc: "peter.jpg", age: 21, description: "The buffest guy around", gender:"Male" }
                            ],
                            female: [
                                {name: "Ina", imageSrc: "ina.jpg", age: 25, description: "Cute girl ready to mingle", gender:"Female" },
                                {name: "Tone", imageSrc: "tone.jpg", age: 41, description: "Old lady, need a man Quick", gender:"female" },
                                {name: "Elise", imageSrc: "elise.jpg", age: 22, description: "Awsome lady who loves cats", gender:"Female" },
                                {name: "Randi", imageSrc: "randi.jpg", age: 30, description: "Babe looking for a nice guy", gender:"Female" }
                            ]
                        };
                        
            
                   
            
                    
                    //HTML objects                
                    let maleBtn, femaleBtn, allBtn;
                    
                    const init = function(){
    
                        const setElements = function(){
                            allBtn = $("#allBtn");
                            maleBtn = $("#maleBtn");
                            femaleBtn = $("#femaleBtn");
                            persons = $("#persons");
    
                        }();
    
                        const setEvents = function(){
                            allBtn.on("click", function(){
                                persons.html("");
                                $.each(personlistJSON.male, function(i, male){
    
                                    let newDiv = $("<div>");
                                    let newLink = $("<a>", {href:  "" , id: male.name});
                                    let newTitle = $("<h3>").html(male.name);
                                    let newImage = $("<img>", {src: "images/profiles/" + male.imageSrc});
                                    let newAge = $("<h3>").html("Age: " + male.age);
                                    
                                    newLink.append(newTitle, newImage, newAge);
    
                                    newDiv.append(newLink);
                            
                                    persons.append(newDiv);
                                })
    
                                $.each(personlistJSON.female, function(i, female){
    
                                    let newDiv = $("<div>");
                                    let newLink = $("<a>", {href:  "" , id: female.name});
                                    let newTitle = $("<h3>").html(female.name);
                                    let newImage = $("<img>", {src: "images/profiles/" + female.imageSrc});
                                    let newAge = $("<h3>").html("Age: " + female.age);
    
                                    newLink.append(newTitle, newImage, newAge);
    
                                    newDiv.append(newLink);
                            
                                    persons.append(newDiv);
                                })
    
    
                            });
                            maleBtn.on("click", function(){
                                persons.html("");
                                $.each(personlistJSON.male, function(i, male){
    
                                    let newDiv = $("<div>");
                                    let newLink = $("<a>", {href:  "" , id: male.name});
                                    let newTitle = $("<h3>").html(male.name);
                                    let newImage = $("<img>", {src: "images/profiles/" + male.imageSrc});
                                    let newAge = $("<h3>").html("Age: " + male.age);
                            
                                    newLink.append(newTitle, newImage, newAge);
    
                                    newDiv.append(newLink);
                            
                                    persons.append(newDiv);
                                })
                            });
                            femaleBtn.on("click", function(){
                                persons.html("");
                                $.each(personlistJSON.female, function(i, female){
                            
                                    let newDiv = $("<div>");
                                    let newLink = $("<a>", {href: "" , id: female.name});
                                    let newTitle = $("<h3>").html(female.name);
                                    let newImage = $("<img>", {src: "images/profiles/" + female.imageSrc});
                                    let newAge = $("<h3>").html("Age: " + female.age);
    
                                    newLink.append(newTitle, newImage, newAge);
    
                                    newDiv.append(newLink);
                            
                                    persons.append(newDiv);
                                })
    
    
                            });
    
                            $("#ida").click( function(){
                                    persons.html("hei");
                            });
                            
                        }();               
    
                    }();//end init
                    
    
                });
            })