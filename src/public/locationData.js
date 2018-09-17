import Cookies from 'js-cookie'
/**
 * 存储cookie
 */
export const getToken = name =>  {
    if (!name) return;
    return Cookies.get(name)
}

/**
 * 设置cookie
 */
export const setToken = (name,content) => {
    if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
    }
    Cookies.set(name,content)
}


/**
 * 获取cookie
 */
export const removeToken = name => {
    if (!name) return;
    Cookies.remove(name)
}  




/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}