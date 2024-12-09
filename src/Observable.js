class Observable {
	constructor() {
		this.subscribers = [];
	}

	// Add a subscriber
	subscribe(fn) {
		this.subscribers.push(fn);
	}

	// Remove a subscriber
	unsubscribe(fn) {
		this.subscribers = this.subscribers.filter((subscriber) => subscriber !== fn);
	}

	// Notify all subscribers
	notify(data) {
		this.subscribers.forEach((subscriber) => subscriber(data));
	}
}

module.exports = Observable;
