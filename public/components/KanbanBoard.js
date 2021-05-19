var KanbanTest = new jKanban({
    element : '#myKanban',
    gutter  : '10px',
    responsivePercentage: true,
    click : function(el){
        alert(el.innerHTML);
        alert(el.dataset.eid)
    },
    boards  :[
        {
            'id' : '_todo',
            'title'  : 'To Do',
            'class' : 'info',
            'item'  : [
                {
                   'id':'task-1',
                    'title':'Do notes on lecture',
                },
                {
                   'id':'#task-2',
                    'title':'Click me!!',
                },
                {
                    'id': 'task-box',
                    'title': 'test!',
                }
            ]
        },
        {
            'id' : '_inprogress',
            'title'  : 'In Progress',
            'class' : 'warning',
            'item'  : [
                {
                    'title': 'Study for exam',
                },
                {
                    'title':'Run?',
                }
            ]
        },
        {
            'id' : '_done',
            'dragTo' : ['_working'],
            'title'  : 'Done',
            'class' : 'success',
            'item'  : [
                {
                    'title':'Finish assignment',
                },
                {
                    'title':'Ok!',
                }
            ]
        }
    ]
});