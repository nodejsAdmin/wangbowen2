<template>
	<div>
		<div>
			<el-button type="text" round v-if="$route.params.id==1" @click="dialogFormVisible = true">+</el-button>

<el-dialog title="名单统计" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="第几节" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="课程" :label-width="formLabelWidth">
      <el-select v-model="form.sex" placeholder="请选择课程">
        <el-option label="语文" value="语文"></el-option>
        <el-option label="数学" value="数学"></el-option>
        <el-option label="英语" value="英语"></el-option>
        <el-option label="物理" value="物理"></el-option>
        <el-option label="化学" value="化学"></el-option>
        <el-option label="体育" value="体育"></el-option>
        <el-option label="美术" value="美术"></el-option>
        <el-option label="历史" value="历史"></el-option>
        <el-option label="音乐" value="音乐"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </div>
</el-dialog>




		</div>
		<div class="home">
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="节数">
      </el-table-column>
      
<el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.row, 1)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click="yi(scope.row,1)"
          type="text"
          size="small">
          星期一
        </el-button>
       <el-button
          @click ="er(scope.row,1)"
          type="text"
          size="small">
          星期二
        </el-button>
        <el-button
          @click ="san(scope.row,1)"
          type="text"
          size="small">
          星期三
        </el-button>
        <el-button
          @click ="si(scope.row,1)"
          type="text"
          size="small">
          星期四
        </el-button>
        <el-button
          @click ="wu(scope.row,1)"
          type="text"
          size="small">
          星期五
        </el-button>
      </template>
    </el-table-column>
  </el-table>
		
	</div>
  
</div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [],
           dialogTableVisible: false,
       		 dialogFormVisible: false,
          form:{},
          formLabelWidth:'120px'
          
        }
      },
      methods:{
      	submit(){
      		this.dialogFormVisible=false
      		this.$http.post("http://localhost:3000/add",this.form,{emulateJSON:true}).then(()=>{
      			this.J_fetch()
      			this.form={}
      		})
      	},
      	deleteRow(e,i){
      		 this.$http.post('http://localhost:3000/del',{id:e.id},{emulateJSON:true}).then(function(){
      		 	var _index=this.tableData.indexOf(e)
      		 	this.tableData.splice(_index,1)
      		 	this.$message({
         		 		message: '恭喜你删除成功',
          				type: 'success'
        });
        
      		 })
      	},
      	yi(e){
      		this.$http.post('http://localhost:3000/date',{id:e.id,state:1},{emulateJSON:true}).then(function(){
      			this.J_fetch()
      			this.$message({
         		 		message: '恭喜你添加课程成功成功',
          				type: 'success'
        });
      		})
      	},
      	er(e){
      		this.$http.post('http://localhost:3000/date',{id:e.id,state:2},{emulateJSON:true}).then(function(){
      			this.J_fetch()
      			this.$message({
         		 		message: '恭喜你添加课程成功成功',
          				type: 'success'
        });
      		})
      	},
      	san(e){
      		this.$http.post('http://localhost:3000/date',{id:e.id,state:3},{emulateJSON:true}).then(function(){
      			this.J_fetch()
      			this.$message({
         		 		message: '恭喜你添加课程成功成功',
          				type: 'success'
        });
      		})
      	},
      	si(e){
      		this.$http.post('http://localhost:3000/date',{id:e.id,state:4},{emulateJSON:true}).then(function(){
      			this.J_fetch()
      			this.$message({
         		 		message: '恭喜你添加课程成功成功',
          				type: 'success'
        });
      		})
      	},
      	wu(e){
      		this.$http.post('http://localhost:3000/date',{id:e.id,state:5},{emulateJSON:true}).then(function(){
      			this.J_fetch()
      			this.$message({
         		 		message: '恭喜你添加课程成功成功',
          				type: 'success'
        });
      		})
      	},

      	J_fetch(){
      		this.$http.post('http://localhost:3000/q',{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.tableData=e.body)

      	}
      },
      watch:{
      	'$route':function(){
      		this.J_fetch()
      	}
      },
      created(){
		this.J_fetch()
      }
    }
  </script>
