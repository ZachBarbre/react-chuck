import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <form>
                <label>
                    Select a Category:
                    <select>
                        <option value="animal">Animal</option>
                        <option value="dev">Dev</option>
                    </select>
                </label>
                <button type="submit">Get a Different Chuck</button>
            </form>
        )
    }
}

export default Category;