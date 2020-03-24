let list = document.querySelector('#list');

// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
list.children[1].innerHTML = "Fair Trade Coffee";

// 2. Remove 'Twinkies' from the list
list.children[3].remove();

// 3. Add an item 'Cheese Whiz'
let cheese = document.createElement('li');
cheese.innerHTML = 'Cheese Whiz';
list.appendChild(cheese);

// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
list.innerHTML = '';
['protein powder', 'muscle milk', 'power bars'].forEach(itemText => {
	let li = document.createElement('li');
	li.innerHTML = itemText;
	list.appendChild(li);
})

// 5. Add the class 'important' to the muscle milk item.
list.children[1].className = "important"