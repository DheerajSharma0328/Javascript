// function greet (name)
// {
//     console.log('Hello' , name);
// }

// function processUser(callback)
// {
//     callback('Don');
// }

// // processUser(greet);

// setTimeout(()=>{
//     processUser(greet);
// },5000);


// loadScript('/my/script.js',
    
//     function(script) {

//         alert(`Cool, the ${script.src} is loaded, let's load one more`);

//         loadScript('/my/script2.js', 
//             function(script) {
//                 alert(`Cool, the second script is loaded`);
//             }
//         );

// });

// here we are calling loadscript and pass two argument one is path and another is a function
//then inside that fucntion again we are callling the same loadscript function and pass path and a funcitonas an agrument

console.log("A. main.js started");


function loadScript(src, callback) {

    console.log("B. loadScript() started");
    console.log("   src =", src);

    // Create a new <script> element
    let script = document.createElement('script');

    console.log("C. <script> element created");

    // Set the script's source
    script.src = src;

    console.log("D. script.src set to", src);


    // What should happen if loading succeeds?
    script.onload = () => {

        console.log("E. onload fired for", src);

        callback(null, script);
    };

    // What should happen if loading fails?
    script.onerror = () => {

        console.log("E. onerror fired for", src);

        callback(
            new Error(`Script load error for ${src}`)
        );
    };

    console.log("F. onload and onerror handlers registered");

    // Add script to document
    document.head.append(script);

    console.log("G. script appended to document");
}


console.log("H. Calling loadScript() for hello.js");


loadScript('/my/hello.js', function(error, script) {

    console.log("I. First callback started");


    if (error) {

        console.log("J. hello.js failed to load");
        console.log(error);

        return;
    }


    console.log("J. hello.js loaded successfully");
    console.log("   script =", script);


    console.log("K. Calling loadScript() for world.js");


    loadScript('/my/world.js', function(error, script) {

        console.log("L. Second callback started");


        if (error) {

            console.log("M. world.js failed to load");
            console.log(error);

            return;
        }


        console.log("M. world.js loaded successfully");
        console.log("   script =", script);

    });


    console.log("N. Second loadScript() call finished");

});


console.log("O. First loadScript() call finished");


console.log("P. main.js finished");