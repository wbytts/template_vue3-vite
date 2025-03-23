<template>
  <div class="interview-question-list">
    <!-- 搜索和筛选区域 -->
    <div class="search-area">
      <el-form :inline="true">
        <el-form-item label="关键词">
          <el-input v-model="searchForm.keyword" placeholder="请输入关键词搜索" clearable />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="searchForm.category" placeholder="请选择分类" clearable style="width: 200px">
            <el-option v-for="item in categories" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="难度">
          <el-select v-model="searchForm.difficulty" placeholder="请选择难度" clearable style="width: 100px">
            <el-option v-for="item in difficulties" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="operation-area">
      <el-button type="primary" @click="handleAdd">
        <el-icon><Plus /></el-icon>新增题目
      </el-button>
    </div>

    <!-- 表格区域 -->
    <el-table
      :data="questionList"
      border
      style="width: 100%"
      v-loading="loading"
      :header-cell-style="{ backgroundColor: '#f5f7fa' }"
    >
      <el-table-column type="index" label="序号" width="60" align="center" />
      <el-table-column prop="title" label="题目" min-width="300">
        <template #default="{ row }">
          <el-link type="primary" @click="handleView(row)">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="分类" width="120" />
      <el-table-column prop="difficulty" label="难度" width="100">
        <template #default="{ row }">
          <el-tag :type="getDifficultyType(row.difficulty)">{{ row.difficulty }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" />
      <el-table-column label="操作" width="150" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="handleView(row)">查看</el-button>
          <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
          <el-button link type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        v-model:current-page="page.current"
        v-model:page-size="page.size"
        :page-sizes="[10, 20, 50, 100]"
        :total="page.total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

// 搜索表单
const searchForm = reactive({
  keyword: "",
  category: "",
  difficulty: ""
});

// 分类选项
const categories = [
  { label: "JavaScript", value: "javascript" },
  { label: "Vue", value: "vue" },
  { label: "React", value: "react" },
  { label: "Node.js", value: "nodejs" },
  { label: "算法", value: "algorithm" }
];

// 难度选项
const difficulties = [
  { label: "简单", value: "easy" },
  { label: "中等", value: "medium" },
  { label: "困难", value: "hard" }
];

// 加载状态
const loading = ref(false);

// 分页配置
const page = reactive({
  current: 1,
  size: 10,
  total: 0
});

// 题目列表数据
const questionList = ref([
  {
    id: 1,
    title: "实现防抖函数",
    category: "JavaScript",
    difficulty: "中等",
    createTime: "2024-01-10 10:00:00"
  },
  {
    id: 2,
    title: "Vue3 组合式 API 的优势",
    category: "Vue",
    difficulty: "简单",
    createTime: "2024-01-10 11:00:00"
  }
  // 更多示例数据...
]);

// 获取难度对应的标签类型
const getDifficultyType = (difficulty: string) => {
  const map: Record<string, string> = {
    简单: "success",
    中等: "warning",
    困难: "danger"
  };
  return map[difficulty] || "info";
};

// 搜索
const handleSearch = () => {
  page.current = 1;
  fetchData();
};

// 重置搜索
const resetSearch = () => {
  Object.assign(searchForm, {
    keyword: "",
    category: "",
    difficulty: ""
  });
  handleSearch();
};

// 分页大小改变
const handleSizeChange = (val: number) => {
  page.size = val;
  fetchData();
};

// 当前页改变
const handleCurrentChange = (val: number) => {
  page.current = val;
  fetchData();
};

// 获取数据
const fetchData = () => {
  loading.value = true;
  // TODO: 实际项目中这里需要调用后端接口
  setTimeout(() => {
    loading.value = false;
  }, 500);
};

// 新增题目
const handleAdd = () => {
  // TODO: 跳转到新增页面或打开新增弹窗
  console.log("新增题目");
};

// 查看详情
const handleView = (row: any) => {
  // TODO: 跳转到详情页或打开详情弹窗
  console.log("查看详情", row);
};

// 编辑题目
const handleEdit = (row: any) => {
  // TODO: 跳转到编辑页或打开编辑弹窗
  console.log("编辑题目", row);
};

// 删除题目
const handleDelete = (row: any) => {
  ElMessageBox.confirm("确认删除该题目吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      // TODO: 调用删除接口
      ElMessage.success("删除成功");
    })
    .catch(() => {});
};

// 初始化
fetchData();
</script>

<style scoped>
.interview-question-list {
  padding: 20px;
}

.search-area {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
}

.operation-area {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
