// /**
//  * Returns an upper case version of st
//  * 
//  * A longer description or instructions... 
//  * 
//  * @param {string} st 
//  * @returns 
//  */
// const myFunction = (st) => {
//     return st.toUpperCase(); 
// }

// module.exports.theFunction = (st) => {
//     return st.toUpperCase(); 
// }; 

const myFunctions = {
    theFunction: (st) => {
        return st.toUpperCase();
    }, 
    asciConvertFunction:(st) =>{
        let charCodeArr = [];
        for(let i=0; i < st.length; i++)
        {
            let code = st.charCodeAt(i);
            charCodeArr.push(code);
        }
    return charCodeArr;
    },

    containsWordFunction: (st, word) =>
    {

        let randomArr = st.split(" ");
        var count;
        for(var i = 0; i<randomArr.length(); i++)
        {
            if(randomArr[i] == word)
                count++;
        }
        return count;
    },

    words








}











module.exports = myFunctions; 


