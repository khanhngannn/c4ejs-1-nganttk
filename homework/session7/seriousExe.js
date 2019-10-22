const timeSheetData = [
    {
        project: 'Learn front-end',
        task: 'Learn HTML',
        timeSpent: 6,
    },
    {
        project: 'Learn front-end',
        task: 'Learn CSS',
        timeSpent: 8,
    },
    {
        project: 'Learn front-end',
        task: 'Lear JS Variables and Data Types',
        timeSpent: 6,
    },
    {
        project: 'Learn git',
        task: 'Learns git basics',
        timeSpent: 2,
    }
]



const tbBody = document.getElementById('ts_tbody');
console.log(timeSheetData);
console.log(tbBody);
// console.log(timeSheetData[0].project);
const btn = document.getElementById('btn');
const ip_project = document.getElementById('project');
const ip_task = document.getElementById('task');
const ip_time = document.getElementById('time');
btn.addEventListener('click', e => {
    const newObj = {
        project: ip_project.value,
        task: ip_task.value,
        timeSpent: ip_time.value,
    }
    timeSheetData.push(newObj);
    console.log(timeSheetData); 
})
console.log(timeSheetData); 

let rowNum = tbBody.getElementsByTagName('tr').length;
for (let i = 0; i < timeSheetData.length; i++) {
    let newRow = tbBody.insertRow(rowNum);
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    cel1.innerHTML = timeSheetData[i].project;
    cel2.innerHTML = timeSheetData[i].task;
    cel3.innerHTML = timeSheetData[i].timeSpent;
    rowNum++;
}
tbBody.getElementsByTagName('tr')[0].remove();









