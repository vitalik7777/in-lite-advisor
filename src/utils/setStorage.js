export default function setStorageTimeStamp(hours) {
    if (hours !== null) {
        let now = new Date().getTime();
        let setupTime = localStorage.getItem('setupTime');
        if (setupTime == null) {
            localStorage.setItem('setupTime', now)
        } else {
            if (now - setupTime > hours * 60 * 60 * 1000) {
                let keysToRemove = ['setupTime', 'apollo-cache-persist'];
                keysToRemove.forEach(k => localStorage.removeItem(k));
                localStorage.setItem('setupTime', now);
            }
        }
    }
}