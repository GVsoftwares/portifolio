import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownCircle, ArrowUpCircle, Lock, Plus, Trash2, Wallet, PlayCircle } from 'lucide-react';

type Transaction = {
  id: number;
  type: 'income' | 'expense';
  desc: string;
  value: number;
};

export default function LiveDemo() {
  // Estado inicial simulando alguns dados. 
  // Como usamos apenas useState, ao atualizar a página (F5), tudo volta ao estado inicial.
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, type: 'income', desc: 'Venda de Licença ERP', value: 3500.00 },
    { id: 2, type: 'expense', desc: 'Servidor Cloud (AWS)', value: 250.00 },
    { id: 3, type: 'income', desc: 'Consultoria de Dados', value: 1200.00 },
  ]);

  const [desc, setDesc] = useState('');
  const [val, setVal] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !val) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      desc,
      value: parseFloat(val),
    };

    setTransactions([newTransaction, ...transactions]);
    setDesc('');
    setVal('');
  };

  const handleDelete = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.value, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.value, 0);
  const balance = income - expense;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            <PlayCircle className="w-4 h-4" />
            Experimente na Prática
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Demonstração Interativa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Teste um mini-dashboard financeiro agora mesmo. Adicione lançamentos e veja o sistema reagir em tempo real.
            <span className="block mt-2 text-cyan-400 font-medium">Os dados não são salvos: atualize a página e tudo será resetado.</span>
          </motion.p>
        </div>

        {/* Browser Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden"
        >
          {/* Browser Header */}
          <div className="bg-slate-900 px-4 py-3 flex items-center gap-4 border-b border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-slate-950 text-slate-400 text-xs px-4 py-1.5 rounded-md flex items-center gap-2 border border-slate-800 w-full max-w-md justify-center">
                <Lock className="w-3 h-3 text-emerald-500" />
                app.gvsoftwares.com.br/demo
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="p-6 md:p-8">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Entradas</p>
                    <h3 className="text-2xl font-bold text-white">{formatCurrency(income)}</h3>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <ArrowUpCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Saídas</p>
                    <h3 className="text-2xl font-bold text-white">{formatCurrency(expense)}</h3>
                  </div>
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <ArrowDownCircle className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-500/30 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-cyan-100/70 text-sm font-medium mb-1">Saldo Total</p>
                    <h3 className="text-2xl font-bold text-cyan-400">{formatCurrency(balance)}</h3>
                  </div>
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <Wallet className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-xl h-fit">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-cyan-400" />
                  Novo Lançamento
                </h4>
                <form onSubmit={handleAdd} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Tipo</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setType('income')}
                        className={`py-2 text-sm font-medium rounded-lg border transition-colors ${type === 'income'
                            ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                            : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                          }`}
                      >
                        Entrada
                      </button>
                      <button
                        type="button"
                        onClick={() => setType('expense')}
                        className={`py-2 text-sm font-medium rounded-lg border transition-colors ${type === 'expense'
                            ? 'bg-red-500/10 border-red-500/50 text-red-400'
                            : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                          }`}
                      >
                        Saída
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Descrição</label>
                    <input
                      type="text"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Ex: Venda de Produto"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Valor (R$)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Adicionar
                  </button>
                </form>
              </div>

              {/* List */}
              <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[400px]">
                <div className="p-4 border-b border-slate-800 bg-slate-900/50">
                  <h4 className="text-white font-bold text-sm">Histórico de Lançamentos</h4>
                </div>
                <div className="p-4 overflow-y-auto flex-1 space-y-3 custom-scrollbar">
                  {transactions.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-slate-500 text-sm">
                      Nenhum lançamento encontrado.
                    </div>
                  ) : (
                    transactions.map((t) => (
                      <motion.div
                        key={t.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-md ${t.type === 'income' ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                            {t.type === 'income' ? (
                              <ArrowUpCircle className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <ArrowDownCircle className="w-4 h-4 text-red-400" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{t.desc}</p>
                            <p className="text-xs text-slate-500">Hoje</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-sm font-bold ${t.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
                            {t.type === 'income' ? '+' : '-'}{formatCurrency(t.value)}
                          </span>
                          <button
                            onClick={() => handleDelete(t.id)}
                            className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
                            title="Excluir"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
