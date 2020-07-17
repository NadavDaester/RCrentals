<template>
  <section>
    <div class="toy-filter flex">
      <div>
        <span>search location</span>
        <input
          @input="setFilter"
          type="text"
          placeholder="enter city"
          class="location"
          v-model="filterBy.location"
        />
      </div>
      <div>
        <span>sort by model</span>
        <el-select
          class="select-type"
          @change="setFilter"
          v-model="filterBy.model"
          placeholder="Select"
        >
          <el-option
            v-for="item in modelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <span>sort by price</span>

        <el-select
          class="select-type"
          @change="setFilter"
          v-model="filterBy.price"
          placeholder="Select"
        >
          <el-option
            v-for="item in priceOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <span>sort by type</span>

        <el-select
          class="select-type"
          @change="setFilter"
          v-model="filterBy.type"
          placeholder="Select"
        >
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        location: "",
        model: "",
        type: "",
        price: "",
        available: ""
      },
      modelOptions: [
        {
          value: "asc",
          label: "old to new"
        },
        {
          value: "desc",
          label: "new to old"
        }
      ],
      priceOptions: [
        {
          value: "asc",
          label: "cheap to expensive"
        },
        {
          value: "desc",
          label: "expensive to cheap"
        }
      ],
      typeOptions: [
        {
          value: "",
          label: "all"
        },
        {
          value: "exotic",
          label: "exotic"
        },
        {
          value: "classic",
          label: "classic"
        },
        {
          value: "minivan",
          label: "minivan"
        },
        {
          value: "vans",
          label: "vans"
        },
        {
          value: "trucks",
          label: "trucks"
        }
      ]
    };
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    }
  },
  methods: {
    setFilter() {
      this.$emit("filter", this.filterBy);
    }
  },
  components: {}
};
</script>