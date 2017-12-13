const FriendStore = {
  data: {
    friends : ["Maya", "Gigi"],
  },
  methods: {
    addFriend(name) {
      FriendStore.data.friends.push(name);
    }
  }
};

export default FriendStore;
