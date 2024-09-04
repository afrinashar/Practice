import React, { useState } from 'react';

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    findSuggestions(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return this._findWords(node, prefix);
    }

    _findWords(node, prefix) {
        const words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (const char in node.children) {
            words.push(...this._findWords(node.children[char], prefix + char));
        }
        return words;
    }
}

const SearchSuggestionsSystem = () => {
    const [trie] = useState(new Trie());
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const prefix = event.target.value;
        setInput(prefix);
        if (prefix) {
            const suggestions = trie.findSuggestions(prefix);
            setSuggestions(suggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <h3>Search Suggestions System</h3>
            <input
                type="text"
                placeholder="Enter prefix"
                value={input}
                onChange={handleInputChange}
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchSuggestionsSystem;
