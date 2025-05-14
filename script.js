const options = document.querySelectorAll('.option');
let openBox = null;

options.forEach(box => {
    const selection = box.querySelector('.selection');

    box.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'select') return;

        if (openBox && openBox !== box) {
            closeBox(openBox);
        }

        if (box.classList.contains('selected')) {
            closeBox(box);
            openBox = null;
        } else {
            openBox = box;
            openBox.classList.add('selected');
            const selectionPanel = openBox.querySelector('.selection');
            selectionPanel.style.maxHeight = selectionPanel.scrollHeight + 'px';
        }
    });

    box.querySelectorAll('select').forEach(select => {
        select.addEventListener('click', (e) => e.stopPropagation());
    });
});

function closeBox(box) {
    box.classList.remove('selected');
    const selection = box.querySelector('.selection');
    selection.style.maxHeight = null;
}
