const dictionary = [
    {
        keyword: 'debug',
        explanation: 'The process of figuring out why your program has a certain error and how to fix it',
    },
    {
        keyword: 'done',
        explanation: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    },
    {
        keyword: 'defect',
        explanation: "The formal word for ‘error’",
    },
    {
        keyword: 'pm',
        explanation: 'The short version of Project Manager, the person in charge of the final result of a project',
    },
    {
        keyword: 'ui/ux',
        explanation: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
    },
];



while (true) {
    let check = false;
    alert('Hi there, this is dev dictionary');
    let keyword = prompt('Enter a keyword:');
    for (let i = 0; i < dictionary.length; i++) {
        if (keyword === dictionary[i].keyword) {
            alert(`${keyword}\n${dictionary[i].explanation}`);
            check = true;
            break;
        }
    }
    if (!check) {
        explanation = prompt(`We coulf not find your word: ${keyword}, leave your explanation`);
        let newKeyword = { keyword, explanation };
        dictionary.push(newKeyword);
        alert('Done');
        alert(`${keyword}\n${explanation}`);
        console.log(dictionary);
    }

}
