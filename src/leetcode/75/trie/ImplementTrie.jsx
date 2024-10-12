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

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}

const ImplementTrie = () => {
    const [trie] = useState(new Trie());
    const [word, setWord] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleInsert = () => {
        trie.insert(word);
        setWord('');
    };

    const handleSearch = () => {
        const result = trie.search(word);
        setSearchResult(result ? 'Word found' : 'Word not found');
        setWord('');
    };

    return (
        <div>
            <h3>Implement Trie (Prefix Tree)</h3>
            <input
                type="text"
                placeholder="Enter word"
                value={word}
                onChange={e => setWord(e.target.value)}
            />
            <button onClick={handleInsert}>Insert</button>
            <button onClick={handleSearch}>Search</button>
            <p>{searchResult}</p>
        </div>
    );
};

export default ImplementTrie;
