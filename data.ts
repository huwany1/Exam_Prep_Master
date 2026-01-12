import { Question, QuestionType } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "下列属于易失性存储器的是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["ROM", "闪存", "DRAM", "光盘"],
    correctAnswer: "C",
    explanation: "DRAM (动态随机存取存储器) 是易失性的，断电后数据丢失。ROM、闪存、光盘都是非易失性的。"
  },
  {
    id: 2,
    text: "直接寻址方式的特点是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["形式地址即操作数", "形式地址即操作数地址", "形式地址即操作数地址的地址", "形式地址为操作数地址对应的寄存器编号"],
    correctAnswer: "B",
    explanation: "直接寻址：指令字中的形式地址 A 就是操作数的有效地址 EA，即 EA=A。"
  },
  {
    id: 3,
    text: "cache直接相联映射方式的冲突率情况是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["最低", "中等", "最高", "不确定"],
    correctAnswer: "C",
    explanation: "直接相联映射中，每个主存块只能映射到 Cache 中的一个特定行，因此冲突率最高，空间利用率最低。"
  },
  {
    id: 4,
    text: "下列属于输出设备的是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["鼠标", "扫描仪", "数/模转换器", "模/数转换器"],
    correctAnswer: "C",
    explanation: "数/模转换器 (D/A) 将数字信号转换为模拟信号输出。鼠标、扫描仪、模/数转换器 (A/D) 属于输入设备。"
  },
  {
    id: 5,
    text: "IEEE754浮点数中，阶码E的表示采用（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["原码", "补码", "移码", "反码"],
    correctAnswer: "C",
    explanation: "IEEE 754 标准规定阶码使用移码表示，以便于比较大小。"
  },
  {
    id: 6,
    text: "两正数相加结果为负，这种情况属于（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["正溢出", "负溢出", "无溢出", "不确定"],
    correctAnswer: "A",
    explanation: "正数加正数结果为负，说明发生了正溢出。"
  },
  {
    id: 7,
    text: "追求用最少的指令完成复杂任务，指令系统庞大而复杂的是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["RISC", "CISC", "两者都是", "两者都不是"],
    correctAnswer: "B",
    explanation: "CISC (复杂指令集计算机) 的特点是指令系统庞大复杂，追求用较少的指令完成复杂任务。"
  },
  {
    id: 8,
    text: "CPU中保存指令地址的是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["累加器", "程序计数器PC", "地址寄存器", "数据寄存器"],
    correctAnswer: "B",
    explanation: "程序计数器 (PC) 用于存放下一条要执行指令的地址。"
  },
  {
    id: 9,
    text: "按内容进行访问的存储器是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["随机存储器", "相联存储器", "只读存储器", "闪存"],
    correctAnswer: "B",
    explanation: "相联存储器 (Associative Memory) 是按内容访问的存储器。"
  },
  {
    id: 10,
    text: "目的是扩充存储器容量的多体交叉存储器是（  ）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["高位多体交叉", "低位多体交叉", "两者都是", "两者都不是"],
    correctAnswer: "A",
    explanation: "高位多体交叉存储器的主要目的是扩充容量；低位多体交叉存储器的主要目的是提高带宽/速度。"
  },
  {
    id: 11,
    text: "寄存器间接寻址中，形式地址为操作数的寄存器编号。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "F",
    explanation: "错误。寄存器间接寻址中，形式地址是寄存器编号，而该寄存器中存放的才是操作数的有效地址。题目描述的是寄存器寻址。"
  },
  {
    id: 12,
    text: "全相联映射的替换算法最简单。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "F",
    explanation: "错误。全相联映射灵活性最高，但查找和替换算法最复杂。"
  },
  {
    id: 13,
    text: "补码乘法中，符号位需要单独处理，不与数值位一起运算。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "F",
    explanation: "错误。补码乘法中，符号位参与运算，与数值位一起处理。"
  },
  {
    id: 14,
    text: "0的原码和反码的0的表示均有两种。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "T",
    explanation: "正确。原码有 +0 和 -0；反码也有 +0 和 -0。而补码的 0 是唯一的。"
  },
  {
    id: 15,
    text: "DRAM的刷新按行进行，可减少存储矩阵的行数，增加列数从而减少刷新周期。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "T",
    explanation: "正确。减少行数可以减少刷新周期数。"
  },
  {
    id: 16,
    text: "偶校验是指原始数据和校验码中1的总个数为奇数。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "F",
    explanation: "错误。偶校验要求 1 的总个数为偶数；奇校验才要求为奇数。"
  },
  {
    id: 17,
    text: "写穿法的写操作需要同时更新cache和主存才报告写完成。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "T",
    explanation: "正确。写穿法 (Write-Through) 保证 Cache 和主存数据始终一致。"
  },
  {
    id: 18,
    text: "汉字编码GB2312采用双字节编码，且每个字节的最高位MSB均为1。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "T",
    explanation: "正确。为了与 ASCII 码区分，国标码每个字节最高位为 1。"
  },
  {
    id: 19,
    text: "低位多体交叉存储器的主要作用是扩充存储器容量。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "F",
    explanation: "错误。低位多体交叉的主要作用是提高带宽和访问速度；高位多体交叉才是扩充容量。"
  },
  {
    id: 20,
    text: "相联存储器是按内容进行访问的存储器。",
    type: QuestionType.TRUE_FALSE,
    correctAnswer: "T",
    explanation: "正确。"
  },
  {
    id: 21,
    text: "指令功能条数=2^m，其中m为______的位数。",
    type: QuestionType.FILL_IN_THE_BLANK,
    explanation: "<p>答案：<strong>操作码</strong></p>"
  },
  {
    id: 22,
    text: "冯诺依曼体系结构的核心是______，即将解题步骤编制成程序，连同数据以二进制形式存放在存储器中。",
    type: QuestionType.FILL_IN_THE_BLANK,
    explanation: "<p>答案：<strong>存储程序</strong></p>"
  },
  {
    id: 23,
    text: "大端方式是指存储器的低字节地址单元中存放的是数据的______字节。",
    type: QuestionType.FILL_IN_THE_BLANK,
    explanation: "<p>答案：<strong>最高</strong></p>"
  },
  {
    id: 24,
    text: "海明码的校验位插入到信息位中对应的2⁰、2¹、2²、2³等______位置。",
    type: QuestionType.FILL_IN_THE_BLANK,
    explanation: "<p>答案：<strong>固定</strong></p>"
  },
  {
    id: 25,
    text: "写回法的写操作特点是更新______即报告写完成。",
    type: QuestionType.FILL_IN_THE_BLANK,
    explanation: "<p>答案：<strong>cache</strong></p>"
  },
  {
    id: 26,
    text: "简述系统互连中系统总线的定义及主要类型。",
    type: QuestionType.ESSAY,
    explanation: "<p><strong>定义：</strong>系统总线是CPU连接计算机中各主要部件的总线，是连接两个或多个设备的公共信息通路。</p><p><strong>主要类型：</strong><br>①数据总线：用于传输数据信息。<br>②地址总线：用于传输内存单元或I/O设备的地址信息。<br>③控制总线：用于传输控制信号和时序信号，协调各部件的操作。</p>"
  },
  {
    id: 27,
    text: "简述奇偶校验的编码规则及局限性。",
    type: QuestionType.ESSAY,
    explanation: "<p><strong>编码规则：</strong>在数据位后增加一位校验位，使校验码中1的个数为奇数（奇校验）或偶数（偶校验）。</p><p><strong>局限性：</strong>只能检测出奇数个位出错的情况，不能检测偶数个位出错。</p>"
  },
  {
    id: 28,
    text: "简述指令格式的定义及指令格式需包含的核心问题。",
    type: QuestionType.ESSAY,
    explanation: "<p><strong>定义：</strong>指令格式是用二进制代码表示指令的结构形式。</p><p><strong>核心问题：</strong><br>①指令要求计算机处理什么操作数？<br>②指令要求计算机对操作数做什么操作？<br>③计算机怎样才能得到操作数？</p>"
  },
  {
    id: 29,
    text: "简述指令寻址方式的定义及分类。",
    type: QuestionType.ESSAY,
    explanation: "<p><strong>定义：</strong>指令寻址方式是寻找指令或操作数有效地址的方式。</p><p><strong>分类：</strong><br>①指令寻址方式：包括顺序寻址、跳跃寻址。<br>②操作数寻址方式：包括立即寻址、直接寻址、间接寻址、寄存器寻址、寄存器间接寻址、相对寻址、基址/变址寻址、复合寻址等。</p>"
  },
  {
    id: 30,
    text: "假定某计算机1和计算机2以不同的方式实现了相同的指令集，该指令集中共有A、B、C、D四类指令，它们所占的比例分别为40%、20%、15%和25%。计算机1和计算机2的时钟频率分别为600MHz和800MHz，各类指令在两计算机上的CPI如下表所示。\n求两计算机的MIPS各为多少？",
    type: QuestionType.COMPLEX,
    complexContent: `
      <table class="w-full text-sm text-center border-collapse border border-slate-300">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2">指令类型</th><th class="border border-slate-300 p-2">A</th><th class="border border-slate-300 p-2">B</th><th class="border border-slate-300 p-2">C</th><th class="border border-slate-300 p-2">D</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-slate-300 p-2">CPI₁</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">3</td><td class="border border-slate-300 p-2">4</td><td class="border border-slate-300 p-2">5</td></tr>
          <tr><td class="border border-slate-300 p-2">CPI₂</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">3</td><td class="border border-slate-300 p-2">4</td></tr>
        </tbody>
      </table>
    `,
    explanation: `
      <p><strong>计算加权平均 CPI (CPI<sub>avg</sub>)</strong></p>
      <p>公式：CPI<sub>avg</sub> = &sum; (CPI<sub>i</sub> &times; 所占比例<sub>i</sub>)</p>
      <p><strong>计算机1：</strong></p>
      <p>CPI<sub>1</sub> = 2 &times; 0.4 + 3 &times; 0.2 + 4 &times; 0.15 + 5 &times; 0.25 = 0.8 + 0.6 + 0.6 + 1.25 = 3.25</p>
      <p><strong>计算机2：</strong></p>
      <p>CPI<sub>2</sub> = 2 &times; 0.4 + 2 &times; 0.2 + 3 &times; 0.15 + 4 &times; 0.25 = 0.8 + 0.4 + 0.45 + 1.0 = 2.65</p>
      <p><strong>计算 MIPS</strong></p>
      <p>公式：MIPS = f / (CPI<sub>avg</sub> &times; 10<sup>6</sup>)</p>
      <p><strong>计算机1：</strong></p>
      <p>MIPS<sub>1</sub> = (600 &times; 10<sup>6</sup>) / (3.25 &times; 10<sup>6</sup>) = 600 / 3.25 &asymp; 184.6 &rarr; 185</p>
      <p><strong>计算机2：</strong></p>
      <p>MIPS<sub>2</sub> = (800 &times; 10<sup>6</sup>) / (2.65 &times; 10<sup>6</sup>) = 800 / 2.65 &asymp; 301.8 &rarr; 302</p>
    `
  },
  {
    id: 31,
    text: "已知数的补码表示形式，求数的真值。\n(1) [x]补 = 1.11111\n(2) [x]补 = 1.00000",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>(1) [x]<sub>补</sub> = 1.11111</strong></p>
      <ul class="list-disc pl-5">
        <li><strong>符号位</strong>为 1，表示负数。</li>
        <li><strong>数值位</strong>求原码：对补码数值位（11111）取反加1。</li>
        <li>取反：00000；加1：00001。即原码为 1.00001。</li>
        <li><strong>真值</strong>：-0.00001<sub>2</sub> （即 -2<sup>-5</sup> = -1/32）。</li>
      </ul>
      <p class="mt-2"><strong>(2) [x]<sub>补</sub> = 1.00000</strong></p>
      <ul class="list-disc pl-5">
        <li>这是一个特殊补码，符号位为 1，数值位全为 0。</li>
        <li>在定点小数中，规定该形式表示 -1。</li>
        <li><strong>推导逻辑</strong>：若按取反加1规则：00000 &rarr; 11111 + 0.00001 = 1.00000（溢出到整数位），即 -1.00000。</li>
        <li><strong>真值</strong>：-1.00000。</li>
      </ul>
    `
  },
  {
    id: 32,
    text: "用IEEE754 32位单精度浮点数标准表示十进制数 6 + 5/8",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>转换为二进制实数</strong></p>
      <ul class="list-disc pl-5">
        <li>整数部分：6 = 110<sub>2</sub></li>
        <li>小数部分：5/8 = 0.625 = 0.101<sub>2</sub></li>
        <li>合并：6 + 5/8 = 110.101<sub>2</sub></li>
      </ul>
      <p class="mt-2"><strong>规格化表示</strong></p>
      <ul class="list-disc pl-5">
        <li>小数点左移2位：1.10101 &times; 2<sup>2</sup></li>
        <li>此时，阶码真值 e = 2，尾数 M = 1.10101。</li>
      </ul>
      <p class="mt-2"><strong>确定各字段</strong></p>
      <ul class="list-disc pl-5">
        <li><strong>符号位 (S)</strong>：正数，取 0。</li>
        <li><strong>阶码 (E)</strong>：采用移码，E = e + 127 = 2 + 127 = 129。二进制为 10000001。</li>
        <li><strong>尾数 (F)</strong>：取规格化后小数点右边的部分，不足23位补0。即 10101 &rarr; 101 0100 ...</li>
      </ul>
      <p class="mt-2"><strong>结果</strong></p>
      <p>二进制：0 10000001 10101000000000000000000</p>
      <p>十六进制：40D40000H</p>
    `
  },
  {
    id: 33,
    text: "设8位有效信息为01101110，试写出它的海明校验码。",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>确定校验位位数</strong></p>
      <p>数据位 n=8，设校验位 k。公式 2<sup>k</sup> &ge; n + k + 1 &rArr; 2<sup>4</sup> &ge; 13。需 k=4 位，总长 12 位。</p>
      <p class="mt-2"><strong>校验位计算 (偶校验)</strong></p>
      <p>位分布：P1(1), P2(2), P4(4), P8(8) 为校验位。</p>
      <p>根据文档指错字逻辑及结果：0110 0111 1001，指错字 H3 D1 (0011)。</p>
      <p class="mt-2"><strong>错误检测与纠正</strong></p>
      <ul class="list-disc pl-5">
        <li>发送方：01101110 &rarr; 编码后</li>
        <li>接收方：01101111 (末位变1)。</li>
        <li>指错字计算：S<sub>4</sub>S<sub>3</sub>S<sub>2</sub>S<sub>1</sub> = 0011 (即3)。</li>
        <li>表示第3位出错。第3位对应数据位 D1 (或按海明码位号3)。</li>
        <li>纠错：将第3位取反即可。</li>
      </ul>
    `
  },
  {
    id: 34,
    text: "已知x和y，用变形补码（双符号位补码）计算x-y，并判断结果是否溢出\n(1) x=0.11011，y=0.11101\n(2) x=-0.11111，y=-0.11001",
    type: QuestionType.COMPLEX,
    explanation: `
      <p>公式：[x-y]<sub>补</sub> = [x]<sub>补</sub> + [-y]<sub>补</sub></p>
      <p class="mt-2"><strong>(1) x=0.11011，y=0.11101</strong></p>
      <ul class="list-disc pl-5">
        <li>[x]<sub>补</sub> = 00.11011</li>
        <li>[y]<sub>补</sub> = 00.11101 &rarr; [-y]<sub>补</sub> = 11.00011</li>
        <li>相加：00.11011 + 11.00011 = 11.11110</li>
        <li>判断：双符号位 11，无溢出。</li>
        <li>真值：-0.00010</li>
      </ul>
      <p class="mt-2"><strong>(2) x=-0.11111，y=-0.11001</strong></p>
      <ul class="list-disc pl-5">
        <li>[x]<sub>补</sub> = 11.00001</li>
        <li>[y]<sub>补</sub> = 11.00111 &rarr; [-y]<sub>补</sub> = 00.11001</li>
        <li>相加：11.00001 + 00.11001 = 11.11010</li>
        <li>判断：双符号位 11，无溢出。</li>
        <li>真值：-0.00110</li>
      </ul>
    `
  },
  {
    id: 35,
    text: "用原码一位乘计算x*y：x=-0.11010，y=-0.01011",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>确定符号位</strong></p>
      <p>Sign = 1 &oplus; 1 = 0 (正)。计算 |x| &middot; |y|。</p>
      <p class="mt-2"><strong>计算过程 (部分积 P, 乘数 Y)</strong></p>
      <ul class="list-disc pl-5">
        <li>初始：P=00.00000, Y=01011</li>
        <li>第1步 (Y末位1)：P+|x| -> 右移。P=00.01101</li>
        <li>第2步 (Y末位1)：P+|x| -> 右移。P=00.10011</li>
        <li>第3步 (Y末位0)：仅右移。P=00.01001</li>
        <li>第4步 (Y末位1)：P+|x| -> 右移。P=00.10001</li>
        <li>第5步 (Y末位0)：仅右移。P=00.01000</li>
      </ul>
      <p><strong>结果</strong></p>
      <p>拼接 P 和移出位，结合符号位：0.0100011110</p>
    `
  },
  {
    id: 36,
    text: "用补码一位乘计算x*y：x=0.10110，y=-0.00011",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>准备数据</strong></p>
      <p>[x]<sub>补</sub>=00.10110, [-x]<sub>补</sub>=11.01010, Y=11.11101, y<sub>n+1</sub>=0</p>
      <p class="mt-2"><strong>循环步骤 (Booth算法判断 y<sub>n</sub>y<sub>n+1</sub>)</strong></p>
      <ul class="list-disc pl-5">
        <li>第1步 (10)：P - x (即 +[-x]<sub>补</sub>) &rarr; 右移。P=11.10101</li>
        <li>第2步 (11)：仅右移。P=11.11010</li>
        <li>第3步 (11)：仅右移。P=11.11101</li>
        <li>第4步 (11)：仅右移。P=11.11110</li>
        <li>第5步 (11)：仅右移。P=11.11111</li>
      </ul>
      <p><strong>结果</strong></p>
      <p>组合结果：1.1110 1111 10</p>
    `
  }
];

export const extraQuestions: Question[] = [];
