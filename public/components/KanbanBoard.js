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
                    'title':'Try drag me',
                },
                {
                   'id':'task-2',
                    'title':'Click me!!',
                }
            ]
        },
        {
            'id' : '_inprogress',
            'title'  : 'In Progress',
            'class' : 'warning',
            'item'  : [
                {
                    'title':'Do Something!',
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
                    'title':'All right',
                },
                {
                    'title':'Ok!',
                }
            ]
        }
    ]
});